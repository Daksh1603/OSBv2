# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from workspaces.models.base_model_ import Model
from workspaces import util


class RepositoryResource(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, name=None, download_url=None):  # noqa: E501
        """RepositoryResource - a model defined in OpenAPI

        :param name: The name of this RepositoryResource.  # noqa: E501
        :type name: str
        :param download_url: The download_url of this RepositoryResource.  # noqa: E501
        :type download_url: str
        """
        self.openapi_types = {
            'name': str,
            'download_url': str
        }

        self.attribute_map = {
            'name': 'name',
            'download_url': 'download_url'
        }

        self._name = name
        self._download_url = download_url

    @classmethod
    def from_dict(cls, dikt) -> 'RepositoryResource':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The RepositoryResource of this RepositoryResource.  # noqa: E501
        :rtype: RepositoryResource
        """
        return util.deserialize_model(dikt, cls)

    @property
    def name(self):
        """Gets the name of this RepositoryResource.

        file name  # noqa: E501

        :return: The name of this RepositoryResource.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this RepositoryResource.

        file name  # noqa: E501

        :param name: The name of this RepositoryResource.
        :type name: str
        """

        self._name = name

    @property
    def download_url(self):
        """Gets the download_url of this RepositoryResource.

        Download URL of the Repository Resource  # noqa: E501

        :return: The download_url of this RepositoryResource.
        :rtype: str
        """
        return self._download_url

    @download_url.setter
    def download_url(self, download_url):
        """Sets the download_url of this RepositoryResource.

        Download URL of the Repository Resource  # noqa: E501

        :param download_url: The download_url of this RepositoryResource.
        :type download_url: str
        """

        self._download_url = download_url
