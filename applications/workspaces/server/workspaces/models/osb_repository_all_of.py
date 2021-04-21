# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from workspaces.models.base_model_ import Model
from workspaces.models.repository_content_type import RepositoryContentType
from workspaces.models.repository_resource_node import RepositoryResourceNode
from workspaces.models.user import User
from workspaces import util

from workspaces.models.repository_content_type import RepositoryContentType  # noqa: E501
from workspaces.models.repository_resource_node import RepositoryResourceNode  # noqa: E501
from workspaces.models.user import User  # noqa: E501

class OSBRepositoryAllOf(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, context_resources=None, contexts=None, user=None, content_types_list=None, description=None, timestamp_modified=None):  # noqa: E501
        """OSBRepositoryAllOf - a model defined in OpenAPI

        :param context_resources: The context_resources of this OSBRepositoryAllOf.  # noqa: E501
        :type context_resources: List[RepositoryResourceNode]
        :param contexts: The contexts of this OSBRepositoryAllOf.  # noqa: E501
        :type contexts: List[str]
        :param user: The user of this OSBRepositoryAllOf.  # noqa: E501
        :type user: User
        :param content_types_list: The content_types_list of this OSBRepositoryAllOf.  # noqa: E501
        :type content_types_list: List[RepositoryContentType]
        :param description: The description of this OSBRepositoryAllOf.  # noqa: E501
        :type description: str
        :param timestamp_modified: The timestamp_modified of this OSBRepositoryAllOf.  # noqa: E501
        :type timestamp_modified: datetime
        """
        self.openapi_types = {
            'context_resources': List[RepositoryResourceNode],
            'contexts': List[str],
            'user': User,
            'content_types_list': List[RepositoryContentType],
            'description': str,
            'timestamp_modified': datetime
        }

        self.attribute_map = {
            'context_resources': 'context_resources',
            'contexts': 'contexts',
            'user': 'user',
            'content_types_list': 'content_types_list',
            'description': 'description',
            'timestamp_modified': 'timestamp_modified'
        }

        self._context_resources = context_resources
        self._contexts = contexts
        self._user = user
        self._content_types_list = content_types_list
        self._description = description
        self._timestamp_modified = timestamp_modified

    @classmethod
    def from_dict(cls, dikt) -> 'OSBRepositoryAllOf':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The OSBRepository_allOf of this OSBRepositoryAllOf.  # noqa: E501
        :rtype: OSBRepositoryAllOf
        """
        return util.deserialize_model(dikt, cls)

    @property
    def context_resources(self):
        """Gets the context_resources of this OSBRepositoryAllOf.


        :return: The context_resources of this OSBRepositoryAllOf.
        :rtype: List[RepositoryResourceNode]
        """
        return self._context_resources

    @context_resources.setter
    def context_resources(self, context_resources):
        """Sets the context_resources of this OSBRepositoryAllOf.


        :param context_resources: The context_resources of this OSBRepositoryAllOf.
        :type context_resources: List[RepositoryResourceNode]
        """

        self._context_resources = context_resources

    @property
    def contexts(self):
        """Gets the contexts of this OSBRepositoryAllOf.


        :return: The contexts of this OSBRepositoryAllOf.
        :rtype: List[str]
        """
        return self._contexts

    @contexts.setter
    def contexts(self, contexts):
        """Sets the contexts of this OSBRepositoryAllOf.


        :param contexts: The contexts of this OSBRepositoryAllOf.
        :type contexts: List[str]
        """

        self._contexts = contexts

    @property
    def user(self):
        """Gets the user of this OSBRepositoryAllOf.


        :return: The user of this OSBRepositoryAllOf.
        :rtype: User
        """
        return self._user

    @user.setter
    def user(self, user):
        """Sets the user of this OSBRepositoryAllOf.


        :param user: The user of this OSBRepositoryAllOf.
        :type user: User
        """

        self._user = user

    @property
    def content_types_list(self):
        """Gets the content_types_list of this OSBRepositoryAllOf.


        :return: The content_types_list of this OSBRepositoryAllOf.
        :rtype: List[RepositoryContentType]
        """
        return self._content_types_list

    @content_types_list.setter
    def content_types_list(self, content_types_list):
        """Sets the content_types_list of this OSBRepositoryAllOf.


        :param content_types_list: The content_types_list of this OSBRepositoryAllOf.
        :type content_types_list: List[RepositoryContentType]
        """

        self._content_types_list = content_types_list

    @property
    def description(self):
        """Gets the description of this OSBRepositoryAllOf.

        Repository description  # noqa: E501

        :return: The description of this OSBRepositoryAllOf.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this OSBRepositoryAllOf.

        Repository description  # noqa: E501

        :param description: The description of this OSBRepositoryAllOf.
        :type description: str
        """

        self._description = description

    @property
    def timestamp_modified(self):
        """Gets the timestamp_modified of this OSBRepositoryAllOf.

        Date/time the OSBReposity is last modified  # noqa: E501

        :return: The timestamp_modified of this OSBRepositoryAllOf.
        :rtype: datetime
        """
        return self._timestamp_modified

    @timestamp_modified.setter
    def timestamp_modified(self, timestamp_modified):
        """Sets the timestamp_modified of this OSBRepositoryAllOf.

        Date/time the OSBReposity is last modified  # noqa: E501

        :param timestamp_modified: The timestamp_modified of this OSBRepositoryAllOf.
        :type timestamp_modified: datetime
        """

        self._timestamp_modified = timestamp_modified
