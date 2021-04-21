from cloudharness import log as logger
from workspaces.models import RepositoryResourceNode, RepositoryResource, FigshareRepositoryResource

from .utils import add_to_tree


class FigShareAdapter:
    def __init__(self, uri):
        self.uri = uri

    def get_contexts(self):
        return list([])

    def get_resources(self, context):
        contents = {"tree": []}

        tree = RepositoryResourceNode(RepositoryResource(name="/"), children=[])
        for git_obj in contents["tree"]:
            add_to_tree(tree, git_obj["path"].split("/"))

        return tree

    def get_latest_hash(self, download_url):
        return 123

    def get_description(self, context):
        return "Description"

    def copy_resource(self, origin):
        repository_resource = FigshareRepositoryResource(**origin)
        logger.info("Processiong copy GIT Repository Resource %s", repository_resource)
