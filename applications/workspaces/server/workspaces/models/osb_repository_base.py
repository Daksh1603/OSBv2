# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from workspaces.models.base_model_ import Model
from workspaces.models.repository_type import RepositoryType
from workspaces import util

from workspaces.models.repository_type import RepositoryType  # noqa: E501

class OSBRepositoryBase(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, name=None, summary=None, repository_type=None, content_types=None, auto_sync=True, uri=None, default_context=None, user_id=None):  # noqa: E501
        """OSBRepositoryBase - a model defined in OpenAPI

        :param id: The id of this OSBRepositoryBase.  # noqa: E501
        :type id: int
        :param name: The name of this OSBRepositoryBase.  # noqa: E501
        :type name: str
        :param summary: The summary of this OSBRepositoryBase.  # noqa: E501
        :type summary: str
        :param repository_type: The repository_type of this OSBRepositoryBase.  # noqa: E501
        :type repository_type: RepositoryType
        :param content_types: The content_types of this OSBRepositoryBase.  # noqa: E501
        :type content_types: str
        :param auto_sync: The auto_sync of this OSBRepositoryBase.  # noqa: E501
        :type auto_sync: bool
        :param uri: The uri of this OSBRepositoryBase.  # noqa: E501
        :type uri: str
        :param default_context: The default_context of this OSBRepositoryBase.  # noqa: E501
        :type default_context: str
        :param user_id: The user_id of this OSBRepositoryBase.  # noqa: E501
        :type user_id: str
        """
        self.openapi_types = {
            'id': int,
            'name': str,
            'summary': str,
            'repository_type': RepositoryType,
            'content_types': str,
            'auto_sync': bool,
            'uri': str,
            'default_context': str,
            'user_id': str
        }

        self.attribute_map = {
            'id': 'id',
            'name': 'name',
            'summary': 'summary',
            'repository_type': 'repository_type',
            'content_types': 'content_types',
            'auto_sync': 'auto_sync',
            'uri': 'uri',
            'default_context': 'default_context',
            'user_id': 'user_id'
        }

        self._id = id
        self._name = name
        self._summary = summary
        self._repository_type = repository_type
        self._content_types = content_types
        self._auto_sync = auto_sync
        self._uri = uri
        self._default_context = default_context
        self._user_id = user_id

    @classmethod
    def from_dict(cls, dikt) -> 'OSBRepositoryBase':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The OSBRepositoryBase of this OSBRepositoryBase.  # noqa: E501
        :rtype: OSBRepositoryBase
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this OSBRepositoryBase.


        :return: The id of this OSBRepositoryBase.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this OSBRepositoryBase.


        :param id: The id of this OSBRepositoryBase.
        :type id: int
        """

        self._id = id

    @property
    def name(self):
        """Gets the name of this OSBRepositoryBase.

        Repository name.  # noqa: E501

        :return: The name of this OSBRepositoryBase.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this OSBRepositoryBase.

        Repository name.  # noqa: E501

        :param name: The name of this OSBRepositoryBase.
        :type name: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def summary(self):
        """Gets the summary of this OSBRepositoryBase.

        Summary describing the OSB Repository  # noqa: E501

        :return: The summary of this OSBRepositoryBase.
        :rtype: str
        """
        return self._summary

    @summary.setter
    def summary(self, summary):
        """Sets the summary of this OSBRepositoryBase.

        Summary describing the OSB Repository  # noqa: E501

        :param summary: The summary of this OSBRepositoryBase.
        :type summary: str
        """

        self._summary = summary

    @property
    def repository_type(self):
        """Gets the repository_type of this OSBRepositoryBase.


        :return: The repository_type of this OSBRepositoryBase.
        :rtype: RepositoryType
        """
        return self._repository_type

    @repository_type.setter
    def repository_type(self, repository_type):
        """Sets the repository_type of this OSBRepositoryBase.


        :param repository_type: The repository_type of this OSBRepositoryBase.
        :type repository_type: RepositoryType
        """
        if repository_type is None:
            raise ValueError("Invalid value for `repository_type`, must not be `None`")  # noqa: E501

        self._repository_type = repository_type

    @property
    def content_types(self):
        """Gets the content_types of this OSBRepositoryBase.

        List of Repository Content Types  # noqa: E501

        :return: The content_types of this OSBRepositoryBase.
        :rtype: str
        """
        return self._content_types

    @content_types.setter
    def content_types(self, content_types):
        """Sets the content_types of this OSBRepositoryBase.

        List of Repository Content Types  # noqa: E501

        :param content_types: The content_types of this OSBRepositoryBase.
        :type content_types: str
        """
        if content_types is None:
            raise ValueError("Invalid value for `content_types`, must not be `None`")  # noqa: E501

        self._content_types = content_types

    @property
    def auto_sync(self):
        """Gets the auto_sync of this OSBRepositoryBase.

        Auto sync of the resources  # noqa: E501

        :return: The auto_sync of this OSBRepositoryBase.
        :rtype: bool
        """
        return self._auto_sync

    @auto_sync.setter
    def auto_sync(self, auto_sync):
        """Sets the auto_sync of this OSBRepositoryBase.

        Auto sync of the resources  # noqa: E501

        :param auto_sync: The auto_sync of this OSBRepositoryBase.
        :type auto_sync: bool
        """

        self._auto_sync = auto_sync

    @property
    def uri(self):
        """Gets the uri of this OSBRepositoryBase.

        URI of the repository  # noqa: E501

        :return: The uri of this OSBRepositoryBase.
        :rtype: str
        """
        return self._uri

    @uri.setter
    def uri(self, uri):
        """Sets the uri of this OSBRepositoryBase.

        URI of the repository  # noqa: E501

        :param uri: The uri of this OSBRepositoryBase.
        :type uri: str
        """
        if uri is None:
            raise ValueError("Invalid value for `uri`, must not be `None`")  # noqa: E501

        self._uri = uri

    @property
    def default_context(self):
        """Gets the default_context of this OSBRepositoryBase.

        The default branch to show for this repository  # noqa: E501

        :return: The default_context of this OSBRepositoryBase.
        :rtype: str
        """
        return self._default_context

    @default_context.setter
    def default_context(self, default_context):
        """Sets the default_context of this OSBRepositoryBase.

        The default branch to show for this repository  # noqa: E501

        :param default_context: The default_context of this OSBRepositoryBase.
        :type default_context: str
        """

        self._default_context = default_context

    @property
    def user_id(self):
        """Gets the user_id of this OSBRepositoryBase.

        OSBRepository keycloak user id, will be automatically be set to the logged in user  # noqa: E501

        :return: The user_id of this OSBRepositoryBase.
        :rtype: str
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id):
        """Sets the user_id of this OSBRepositoryBase.

        OSBRepository keycloak user id, will be automatically be set to the logged in user  # noqa: E501

        :param user_id: The user_id of this OSBRepositoryBase.
        :type user_id: str
        """

        self._user_id = user_id
