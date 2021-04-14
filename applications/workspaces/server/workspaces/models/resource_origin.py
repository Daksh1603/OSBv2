# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from workspaces.models.base_model_ import Model
from workspaces.models.download_resource import DownloadResource
from workspaces.models.repository_resource import RepositoryResource
from workspaces import util

from workspaces.models.download_resource import DownloadResource  # noqa: E501
from workspaces.models.repository_resource import RepositoryResource  # noqa: E501

class ResourceOrigin(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, path=None, name=None, osbrepository_id=None, ref=None, sha=None):  # noqa: E501
        """ResourceOrigin - a model defined in OpenAPI

        :param path: The path of this ResourceOrigin.  # noqa: E501
        :type path: str
        :param name: The name of this ResourceOrigin.  # noqa: E501
        :type name: str
        :param osbrepository_id: The osbrepository_id of this ResourceOrigin.  # noqa: E501
        :type osbrepository_id: int
        :param ref: The ref of this ResourceOrigin.  # noqa: E501
        :type ref: str
        :param sha: The sha of this ResourceOrigin.  # noqa: E501
        :type sha: str
        """
        self.openapi_types = {
            'path': str,
            'name': str,
            'osbrepository_id': int,
            'ref': str,
            'sha': str
        }

        self.attribute_map = {
            'path': 'path',
            'name': 'name',
            'osbrepository_id': 'osbrepository_id',
            'ref': 'ref',
            'sha': 'sha'
        }

        self._path = path
        self._name = name
        self._osbrepository_id = osbrepository_id
        self._ref = ref
        self._sha = sha

    @classmethod
    def from_dict(cls, dikt) -> 'ResourceOrigin':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The ResourceOrigin of this ResourceOrigin.  # noqa: E501
        :rtype: ResourceOrigin
        """
        return util.deserialize_model(dikt, cls)

    @property
    def path(self):
        """Gets the path of this ResourceOrigin.

        Download URL of the Resource  # noqa: E501

        :return: The path of this ResourceOrigin.
        :rtype: str
        """
        return self._path

    @path.setter
    def path(self, path):
        """Sets the path of this ResourceOrigin.

        Download URL of the Resource  # noqa: E501

        :param path: The path of this ResourceOrigin.
        :type path: str
        """

        self._path = path

    @property
    def name(self):
        """Gets the name of this ResourceOrigin.

        file name  # noqa: E501

        :return: The name of this ResourceOrigin.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this ResourceOrigin.

        file name  # noqa: E501

        :param name: The name of this ResourceOrigin.
        :type name: str
        """

        self._name = name

    @property
    def osbrepository_id(self):
        """Gets the osbrepository_id of this ResourceOrigin.

        OSB Repository id  # noqa: E501

        :return: The osbrepository_id of this ResourceOrigin.
        :rtype: int
        """
        return self._osbrepository_id

    @osbrepository_id.setter
    def osbrepository_id(self, osbrepository_id):
        """Sets the osbrepository_id of this ResourceOrigin.

        OSB Repository id  # noqa: E501

        :param osbrepository_id: The osbrepository_id of this ResourceOrigin.
        :type osbrepository_id: int
        """

        self._osbrepository_id = osbrepository_id

    @property
    def ref(self):
        """Gets the ref of this ResourceOrigin.

        The GIT ref  # noqa: E501

        :return: The ref of this ResourceOrigin.
        :rtype: str
        """
        return self._ref

    @ref.setter
    def ref(self, ref):
        """Sets the ref of this ResourceOrigin.

        The GIT ref  # noqa: E501

        :param ref: The ref of this ResourceOrigin.
        :type ref: str
        """

        self._ref = ref

    @property
    def sha(self):
        """Gets the sha of this ResourceOrigin.

        The GIT sha of the resource  # noqa: E501

        :return: The sha of this ResourceOrigin.
        :rtype: str
        """
        return self._sha

    @sha.setter
    def sha(self, sha):
        """Sets the sha of this ResourceOrigin.

        The GIT sha of the resource  # noqa: E501

        :param sha: The sha of this ResourceOrigin.
        :type sha: str
        """

        self._sha = sha
