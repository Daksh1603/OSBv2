# coding: utf-8

from __future__ import absolute_import

from datetime import date, datetime  # noqa: F401
from typing import Dict, List  # noqa: F401

from workspaces import util
from workspaces.models.base_model_ import Model
from workspaces.models.resource_origin import ResourceOrigin  # noqa: E501


class WorkspaceResourceAllOf(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, workspace_id=None, origin=None):  # noqa: E501
        """WorkspaceResourceAllOf - a model defined in OpenAPI

        :param workspace_id: The workspace_id of this WorkspaceResourceAllOf.  # noqa: E501
        :type workspace_id: int
        :param origin: The origin of this WorkspaceResourceAllOf.  # noqa: E501
        :type origin: ResourceOrigin
        """
        self.openapi_types = {"workspace_id": int, "origin": ResourceOrigin}

        self.attribute_map = {"workspace_id": "workspace_id", "origin": "origin"}

        self._workspace_id = workspace_id
        self._origin = origin

    @classmethod
    def from_dict(cls, dikt) -> "WorkspaceResourceAllOf":
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The WorkspaceResource_allOf of this WorkspaceResourceAllOf.  # noqa: E501
        :rtype: WorkspaceResourceAllOf
        """
        return util.deserialize_model(dikt, cls)

    @property
    def workspace_id(self):
        """Gets the workspace_id of this WorkspaceResourceAllOf.

        workspace_id  # noqa: E501

        :return: The workspace_id of this WorkspaceResourceAllOf.
        :rtype: int
        """
        return self._workspace_id

    @workspace_id.setter
    def workspace_id(self, workspace_id):
        """Sets the workspace_id of this WorkspaceResourceAllOf.

        workspace_id  # noqa: E501

        :param workspace_id: The workspace_id of this WorkspaceResourceAllOf.
        :type workspace_id: int
        """

        self._workspace_id = workspace_id

    @property
    def origin(self):
        """Gets the origin of this WorkspaceResourceAllOf.


        :return: The origin of this WorkspaceResourceAllOf.
        :rtype: ResourceOrigin
        """
        return self._origin

    @origin.setter
    def origin(self, origin):
        """Sets the origin of this WorkspaceResourceAllOf.


        :param origin: The origin of this WorkspaceResourceAllOf.
        :type origin: ResourceOrigin
        """

        self._origin = origin
