# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from workspaces.models.base_model_ import Model
from workspaces import util


class WorkspaceTag(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, tag=None):  # noqa: E501
        """WorkspaceTag - a model defined in OpenAPI

        :param id: The id of this WorkspaceTag.  # noqa: E501
        :type id: int
        :param tag: The tag of this WorkspaceTag.  # noqa: E501
        :type tag: str
        """
        self.openapi_types = {"id": int, "tag": str}

        self.attribute_map = {"id": "id", "tag": "tag"}

        self._id = id
        self._tag = tag

    @classmethod
    def from_dict(cls, dikt) -> "WorkspaceTag":
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The WorkspaceTag of this WorkspaceTag.  # noqa: E501
        :rtype: WorkspaceTag
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this WorkspaceTag.


        :return: The id of this WorkspaceTag.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this WorkspaceTag.


        :param id: The id of this WorkspaceTag.
        :type id: int
        """

        self._id = id

    @property
    def tag(self):
        """Gets the tag of this WorkspaceTag.

        WorkspaceTag tag  # noqa: E501

        :return: The tag of this WorkspaceTag.
        :rtype: str
        """
        return self._tag

    @tag.setter
    def tag(self, tag):
        """Sets the tag of this WorkspaceTag.

        WorkspaceTag tag  # noqa: E501

        :param tag: The tag of this WorkspaceTag.
        :type tag: str
        """
        if tag is None:
            raise ValueError("Invalid value for `tag`, must not be `None`")  # noqa: E501

        self._tag = tag
