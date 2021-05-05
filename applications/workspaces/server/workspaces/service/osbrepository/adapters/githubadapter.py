import base64
import requests
import workspaces.service.etlservice as etlservice
import workspaces.service.workflow as workflow

from cloudharness import log as logger
from cloudharness.utils.secrets import get_secret
from workspaces.models import RepositoryResourceNode, GITRepositoryResource

from .utils import add_to_tree


GITHUB_USER = get_secret("workspaces", "github-user")
GITHUB_USER = GITHUB_USER if GITHUB_USER and GITHUB_USER != "none" else "osb-admin"
GITHUB_TOKEN = get_secret("workspaces", "github-token")
GITHUB_TOKEN = GITHUB_TOKEN if GITHUB_TOKEN and GITHUB_TOKEN != "none" else "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"

logger.debug("GitHub user:%s, token:%s.", GITHUB_USER, GITHUB_TOKEN)


def _clean_url_and_end_with_slash(url):
    first_part = url[:7]  # https:/
    second_part = url[7:] + "/"  # /host/path
    while '//' in second_part:
        second_part = second_part.replace("//", "/")
    return first_part + second_part


class GitHubAdapter:
    def __init__(self, osbrepository, uri=None):
        self.osbrepository = osbrepository
        self.uri = uri if uri else osbrepository.url
        self.api_url = _clean_url_and_end_with_slash(self.uri.replace("https://github.com/","https://api.github.com/repos/"))
        self.download_base_url = _clean_url_and_end_with_slash(self.uri)

    def get_json(self, uri):
        r = requests.get(uri, auth=(GITHUB_USER, GITHUB_TOKEN))
        if r.status_code == 200:
            return r.json()
        elif r.status_code == 403:
            # rate limit hit
            error = r.json()
            logger.info(error)
            raise Exception(f"GitHub adapter error: {error['message']}")
        else:
            raise Exception(f"Failed getting GitHub content, url: {uri}, status code: {r.status_code}")

    def get_contexts(self):
        branches = self.get_json(self.api_url + "branches")
        tags = self.get_json(self.api_url + "tags")
        return list([context["name"] for context in branches + tags])

    def get_resources(self, context):
        contents = self.get_json(f"{self.api_url}git/trees/{context}?recursive=1")

        tree = RepositoryResourceNode(
            resource=GITRepositoryResource(
                name="/",
                path=f"{self.download_base_url}branches/{context}",
                osbrepository_id=self.osbrepository.id,
                ref=context),
            children=[]
        )
        for git_obj in contents["tree"]:
            download_url = f"{self.download_base_url}branches/{context}/{git_obj['path']}"
            add_to_tree(
                tree=tree,
                tree_path=git_obj["path"].split("/"),
                path=download_url,
                sha=git_obj["sha"],
                ref=context,
                osbrepository_id=self.osbrepository.id
            )

        return tree

    def _get_context_from_url(self, url):
        return url.replace(self.download_base_url, "").split("/")[0]

    def _get_path_from_url(self, url):
        return "/".join(url.replace(self.download_base_url, "").split("/")[1:])

    def get_latest_hash(self, download_url):
        # get the latest version of the file specified in the download url
        context = self._get_context_from_url(download_url)
        path = self._get_path_from_url(download_url)
        file = self.get_json(f"{self.api_url}contents/{path}?ref={context}")
        return file["sha"]

    def get_description(self, context):
        try:
            result = self.get_json(f"{self.api_url}readme?ref={context}")
            description = base64.b64decode(result["content"]).decode('utf-8')
            return description
        except Exception as e:
            return e

    def create_copy_task(self, workspace_id, origin):
        # download the resource
        name = origin["name"] if origin["name"] != "/" else self.osbrepository.name
        path = origin["path"]
        folder = self.osbrepository.name + path.replace(self.download_base_url+"branches", "")
        folder = folder[:folder.rfind("/")]
        return workflow.create_copy_task(
            image_name="workspaces-github-copy",
            workspace_id=workspace_id,
            origin={
                "name": name,
                "folder": folder,
                "path": path
            })
