import os

from flask import request, current_app
from sqlalchemy import desc
from sqlalchemy.sql import func

from cloudharness import log as logger
from cloudharness.auth import AuthClient
from cloudharness.service import pvc

from ..config import Config
from ..utils import get_keycloak_data

from .base_model_repository import BaseModelRepository
from .database import db
from .models import Workspace, User, OSBRepository, GITRepository, FigshareRepository, VolumeStorage, \
    WorkspaceImage, WorkspaceResource, TWorkspaceResource
from ..service.kubernetes import create_persistent_volume_claim


class WorkspaceRepository(BaseModelRepository):
    model = Workspace
    defaults = {}

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.auth_client = AuthClient()

    def get_pvc_name(self, workspace_id):
        return f'workspace-{workspace_id}'

    def search_qs(self, filter=None):

        q_base = self.model.query

        keycloak_id = self.keycloak_id
        if filter is not None:
            q_base = q_base.filter(*[self._create_filter(*f) for f in filter])
        logger.debug(
            "searching workspaces on keycloak_id: %s", keycloak_id)
        if filter and any(field for field, condition, value in filter if field.key == 'publicable' and value):
            q1 = q_base
        elif keycloak_id is not None:
            if not self.auth_client.current_user_has_realm_role('administrator'):
                # Check if the current user is registered as a workspace owner
                owner = User.query.filter_by(keycloak_id=keycloak_id).first()

                owner_id = owner.id if owner else 0
                # non admin users can see only their own workspaces
                q1 = q_base.filter_by(keycloakuser_id=owner_id)
                q1 = q1.union(q_base.filter(
                    Workspace.collaborators.any(keycloak_id=self.keycloak_id)))
            else:
                q1 = q_base
        else:
            q1 = q_base.filter_by(publicable=True)
        return q1.order_by(desc(Workspace.timestamp_updated))

    def delete(self, id):
        resource_repository = WorkspaceResourceRepository()
        workspace = self.model.query.filter_by(id=id).first()

        for resource in workspace.resources:
            logger.debug("deleting resource %s", resource.id)
            resource_repository.delete(resource.id)
        logger.info("deleting workspace %s", id)
        super().delete(id)
        logger.info("deleted workspace %s", id)
        logger.info("deleting volume %s", id)
        pvc.delete_persistent_volume_claim(f"workspace-{id}")
        logger.info("deleted volume %s", id)

    @property
    def keycloak_id(self):
        try:
            return self.auth_client.get_current_user().get('id', None)
        except:
            return None

    def get_logged_user(self) -> User:
        return self.auth_client.get_current_user()

    def pre_commit(self, workspace):
        logger.debug(f'Pre Commit for workspace id: {workspace.id}')
        if not workspace.id:
            # in case of a new workspace assign the logged in user as owner
            keycloak_data = self.get_logged_user()
            keycloak_id = keycloak_data.get('id', -1)

            owner = User.query.filter_by(keycloak_id=keycloak_id).first()
            if not owner:
                usr_firstname = keycloak_data.get('firstName', '')
                usr_lastname = keycloak_data.get('lastName', '')
                usr_email = keycloak_data.get('email', '')
                owner = User(firstname=usr_firstname,
                             lastname=usr_lastname,
                             keycloak_id=keycloak_id,
                             email=usr_email
                             )
            workspace.owner = owner
        return workspace

    def post_commit(self, workspace):
        # Create a new Persistent Volume Claim for this workspace
        logger.debug(f'Post Commit for workspace id: {workspace.id}')
        create_persistent_volume_claim(name=self.get_pvc_name(
            workspace.id), size='2Gi', logger=logger)
        wsrr = WorkspaceResourceRepository()
        for workspace_resource in workspace.resources:
            wsr = wsrr.post_commit(workspace_resource)
            if wsr:
                db.session.add(wsr)
                db.session.commit()
        return workspace


class OSBRepositoryRepository(BaseModelRepository):
    model = OSBRepository


class GITRepositoryRepository(BaseModelRepository):
    model = GITRepository


class FigshareRepositoryRepository(BaseModelRepository):
    model = FigshareRepository


class VolumeStorageRepository(BaseModelRepository):
    model = VolumeStorage


class WorkspaceImageRepository(BaseModelRepository):
    model = WorkspaceImage


class WorkspaceResourceRepository(BaseModelRepository):
    model = WorkspaceResource

    @staticmethod
    def guess_resurce_type(resource_path):
        resource_path = resource_path.split('?')[0]
        if resource_path[-3:] == "nwb":
            return "e"
        elif resource_path[-3:] == "np":
            return 'g'
        return 'g'

    def pre_commit(self, workspace_resource: TWorkspaceResource):
        # Check if we can determine the resource type
        logger.debug(
            f'Pre Commit for workspace resource id: {workspace_resource.id}')
        if not workspace_resource.resource_type or workspace_resource.resource_type == 'u':
            workspace_resource.resource_type = self.guess_resurce_type(
                workspace_resource.location)
        if workspace_resource.folder is None or len(workspace_resource.folder) == 0:
            workspace_resource.folder = workspace_resource.name
        return workspace_resource

    def post_commit(self, workspace_resource: TWorkspaceResource):
        # Create a load WorkspaceResource workflow task
        logger.debug(
            f'Post Commit for workspace resource id: {workspace_resource.id}')
        workspace = WorkspaceRepository().get(id=workspace_resource.workspace_id)
        if workspace_resource.folder is None:
            logger.debug(
                f'Pre Commit for workspace resource id: {workspace_resource.id} setting folder from file name')
            workspace_resource.folder = workspace_resource.name

        if workspace is not None and workspace_resource.status == 'p' and 'http' == workspace_resource.location[0:4]:
            logger.debug('Starting resource ETL from %s',
                         workspace_resource.location)
            try:
                from ..service.workflow import add_resource
                add_resource(workspace, workspace_resource)
            except Exception as e:
                logger.error(
                    "An error occurred while adding the default resource to the workspace", exc_info=True)
                return workspace_resource
        return workspace_resource

    def post_get(self, workspace_resource):
        workspace = WorkspaceRepository().get(id=workspace_resource.workspace_id)

        return workspace_resource

    def open(self, workspace_resource):
        # test if workspace resource status is "available"
        if workspace_resource.status != "a":
            return f"WorkspaceResource with id {workspace_resource.id} is not yet available for opening. Please wait until the status is a(vailable)", 422

        workspace_resource.timestamp_last_opened = func.now()
        workspace = WorkspaceRepository().get(id=workspace_resource.workspace_id)
        if workspace is not None:
            workspace.last_opened_resource_id = workspace_resource.id
        db.session.add(workspace_resource)
        db.session.add(workspace)
        db.session.commit()

        return "Saved", 200

    def delete(self, id):
        """Delete an object from the repository."""
        resource: TWorkspaceResource = self.get(id)
        super().delete(id)

        try:
            from ..service.workflow import delete_resource
            delete_resource(resource.workspace_id, resource.folder)
        except Exception as e:
            logger.error(
                "An error occurred while deleting resource from the workspace", exc_info=True)
            return None
