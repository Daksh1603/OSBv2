# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from workspaces.models.base_model_ import Model
from workspaces.models.osb_repository_entity import OSBRepositoryEntity
from workspaces.models.workspace_entity import WorkspaceEntity
from workspaces import util

from workspaces.models.osb_repository_entity import OSBRepositoryEntity  # noqa: E501
from workspaces.models.workspace_entity import WorkspaceEntity  # noqa: E501

class Tag(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, tag=None, workspaces=None, repositories=None):  # noqa: E501
        """Tag - a model defined in OpenAPI

        :param id: The id of this Tag.  # noqa: E501
        :type id: int
        :param tag: The tag of this Tag.  # noqa: E501
        :type tag: str
        :param workspaces: The workspaces of this Tag.  # noqa: E501
        :type workspaces: List[WorkspaceEntity]
        :param repositories: The repositories of this Tag.  # noqa: E501
        :type repositories: List[OSBRepositoryEntity]
        """
        self.openapi_types = {
            'id': int,
            'tag': str,
            'workspaces': List[WorkspaceEntity],
            'repositories': List[OSBRepositoryEntity]
        }

        self.attribute_map = {
            'id': 'id',
            'tag': 'tag',
            'workspaces': 'workspaces',
            'repositories': 'repositories'
        }

        self._id = id
        self._tag = tag
        self._workspaces = workspaces
        self._repositories = repositories

    @classmethod
    def from_dict(cls, dikt) -> 'Tag':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Tag of this Tag.  # noqa: E501
        :rtype: Tag
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this Tag.


        :return: The id of this Tag.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Tag.


        :param id: The id of this Tag.
        :type id: int
        """

        self._id = id

    @property
    def tag(self):
        """Gets the tag of this Tag.


        :return: The tag of this Tag.
        :rtype: str
        """
        return self._tag

    @tag.setter
    def tag(self, tag):
        """Sets the tag of this Tag.


        :param tag: The tag of this Tag.
        :type tag: str
        """

        self._tag = tag

    @property
    def workspaces(self):
        """Gets the workspaces of this Tag.


        :return: The workspaces of this Tag.
        :rtype: List[WorkspaceEntity]
        """
        return self._workspaces

    @workspaces.setter
    def workspaces(self, workspaces):
        """Sets the workspaces of this Tag.


        :param workspaces: The workspaces of this Tag.
        :type workspaces: List[WorkspaceEntity]
        """

        self._workspaces = workspaces

    @property
    def repositories(self):
        """Gets the repositories of this Tag.


        :return: The repositories of this Tag.
        :rtype: List[OSBRepositoryEntity]
        """
        return self._repositories

    @repositories.setter
    def repositories(self, repositories):
        """Sets the repositories of this Tag.


        :param repositories: The repositories of this Tag.
        :type repositories: List[OSBRepositoryEntity]
        """

        self._repositories = repositories
