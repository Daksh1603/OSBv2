import json

from cloudharness import log as logger
from workspaces.models.osb_repository import OSBRepository



from workspaces.service.osbrepository.adapters import DandiAdapter, FigShareAdapter, GitHubAdapter


def get_repository_adapter(osbrepository: OSBRepository=None, repository_type=None, uri=None, *args, **kwargs):
    if osbrepository is not None:
        repository_type = osbrepository.repository_type
        uri = osbrepository.uri
    if repository_type == "github":
        return GitHubAdapter(*args, osbrepository=osbrepository, uri=uri, **kwargs)
    elif repository_type == "dandi":
        return DandiAdapter(*args, osbrepository=osbrepository, uri=uri, **kwargs)
    elif repository_type == "figshare":
        return FigShareAdapter(*args, osbrepository=osbrepository, uri=uri, **kwargs)
    return None


def get_contexts(uri, repository_type):
    repository_service = get_repository_adapter(
        repository_type=repository_type, uri=uri)
    return repository_service.get_contexts()


def get_resources(osbrepository, osbrepository_id=None, context=None):
    repository_service = get_repository_adapter(osbrepository=osbrepository)
    if not context:
        context = osbrepository.default_context
    return repository_service.get_resources(context)


def get_description(osbrepository, context=None):
    repository_service = get_repository_adapter(osbrepository=osbrepository)
    if not context:
        context = osbrepository.default_context
    return repository_service.get_description(context)


def get_tags(osbrepository, context=None):
    repository_adapter = get_repository_adapter(osbrepository=osbrepository)
    if not context:
        context = osbrepository.default_context
    return repository_adapter.get_tags(context)


<<<<<<< HEAD:applications/workspaces/server/workspaces/service/osbrepository/__init__.py
# def copy_resource(workspace_resource):
#     origin = json.loads(workspace_resource.origin)
#     osbrepository = repos.OSBRepositoryRepository().get(id=origin.get("osbrepository_id"))
#     repository_adapter = get_repository_adapter(osbrepository=osbrepository)
#     repository_adapter.copy_resource(workspace_resource, origin)


def create_copy_task(workspace_id, osbrepository_id, name, path):
    from workspaces.repository.model_repository import OSBRepositoryRepository
    osbrepository = OSBRepositoryRepository().get(id=osbrepository_id)
=======
def copy_resource(workspace_resource):
    import workspaces.repository as repos
    origin = json.loads(workspace_resource.origin)
    osbrepository = repos.OSBRepositoryRepository().get(
        id=origin.get("osbrepository_id"))
    repository_adapter = get_repository_adapter(osbrepository=osbrepository)
    repository_adapter.copy_resource(workspace_resource, origin)


def create_copy_task(workspace_id, osbrepository_id, name, path):
    import workspaces.repository as repos
    osbrepository = repos.OSBRepositoryRepository().get(id=osbrepository_id)
>>>>>>> fb8df9b514a825e45594d0b0a56ea18ce5d1866a:applications/workspaces/server/workspaces/service/osbrepository/osbrepository_service.py
    repository_adapter = get_repository_adapter(osbrepository=osbrepository)
    return repository_adapter.create_copy_task(workspace_id=workspace_id, name=name, path=path)
