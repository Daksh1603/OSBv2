import json
import workspaces.repository as repos
import workspaces.service.workflow as workflow
import workspaces.service.osbrepository.osbrepository as osbrepository_service #import copy_resource, create_copy_origin_task

from cloudharness import log as logger


def copy_workspace_resource(workspace_resource):
    if workspace_resource.status == 'p' and workspace_resource.origin and len(workspace_resource.origin)>0:
        origin = json.loads(workspace_resource.origin)

        osbrepository_id = origin.get("osbrepository_id", None)
        if osbrepository_id:
            # repository resource based workspace resource
            return osbrepository_service.copy_resource(workspace_resource)
        else:
            # download the resource
            return download_workspace_resource(workspace_resource)
    return workspace_resource


def copy_origins(workspace_id, origins):
    tasks = []
    for origin in origins:
        if origin.get("osbrepository_id"):
            # osb repository origin
            task = osbrepository_service.create_copy_task(
                workspace_id=workspace_id,
                origin=origin)
            if type(task) is list:
                tasks.extend(task)
            else:
                tasks.append(task)
        else:
            # download origin
            tasks.append(workflow.create_copy_task(
                workspace_id=workspace_id,
                origin=origin))
    workflow.run_copy_tasks(
        workspace_id,
        tasks)


def download_workspace_resource(workspace_resource):
    try:
        origin = json.loads(workspace_resource.origin)
        path = origin.get("path", "")
        logger.debug('Starting resource ETL from %s', path)
        pvc_name = repos.WorkspaceRepository().get_pvc_name(workspace_resource.workspace_id)
        workflow.download_workspace_resource(
            workspace_resource=workspace_resource,
            pvc_name=pvc_name,
            path=path,
            folder=workspace_resource.folder)
    except Exception as e:
        logger.error(
            "An error occurred while adding the default resource to the workspace", exc_info=True)
        return workspace_resource
    return workspace_resource


def delete_workspace_resource(workspace_resource):
    try:
        pvc_name = repos.WorkspaceRepository().get_pvc_name(workspace_resource.workspace_id)
        workflow.delete_resource(
            workspace_resource=workspace_resource,
            pvc_name=pvc_name,
            resource_path=workspace_resource.folder)
    except Exception as e:
        logger.error(
            "An error occurred while deleting resource from the workspace", exc_info=True)
        return None
    return True