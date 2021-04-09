# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from workspaces.models.base_model_ import Model
from workspaces.models.osb_repository_context import OSBRepositoryContext
from workspaces.models.repository_type import RepositoryType
from workspaces import util

from workspaces.models.osb_repository_context import OSBRepositoryContext  # noqa: E501
from workspaces.models.repository_type import RepositoryType  # noqa: E501

class RepositoryBase(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, name=None, description=None, repository_type=None, repository_content_types=None, auto_sync=True, uri=None, user_id=None, used_contexts=None):  # noqa: E501
        """RepositoryBase - a model defined in OpenAPI

        :param id: The id of this RepositoryBase.  # noqa: E501
        :type id: int
        :param name: The name of this RepositoryBase.  # noqa: E501
        :type name: str
        :param description: The description of this RepositoryBase.  # noqa: E501
        :type description: str
        :param repository_type: The repository_type of this RepositoryBase.  # noqa: E501
        :type repository_type: RepositoryType
        :param repository_content_types: The repository_content_types of this RepositoryBase.  # noqa: E501
        :type repository_content_types: str
        :param auto_sync: The auto_sync of this RepositoryBase.  # noqa: E501
        :type auto_sync: bool
        :param uri: The uri of this RepositoryBase.  # noqa: E501
        :type uri: str
        :param user_id: The user_id of this RepositoryBase.  # noqa: E501
        :type user_id: str
        :param used_contexts: The used_contexts of this RepositoryBase.  # noqa: E501
        :type used_contexts: List[OSBRepositoryContext]
        """
        self.openapi_types = {
            'id': int,
            'name': str,
            'description': str,
            'repository_type': RepositoryType,
            'repository_content_types': str,
            'auto_sync': bool,
            'uri': str,
            'user_id': str,
            'used_contexts': List[OSBRepositoryContext]
        }

        self.attribute_map = {
            'id': 'id',
            'name': 'name',
            'description': 'description',
            'repository_type': 'repository_type',
            'repository_content_types': 'repository_content_types',
            'auto_sync': 'auto_sync',
            'uri': 'uri',
            'user_id': 'user_id',
            'used_contexts': 'used_contexts'
        }

        self._id = id
        self._name = name
        self._description = description
        self._repository_type = repository_type
        self._repository_content_types = repository_content_types
        self._auto_sync = auto_sync
        self._uri = uri
        self._user_id = user_id
        self._used_contexts = used_contexts

    @classmethod
    def from_dict(cls, dikt) -> 'RepositoryBase':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The RepositoryBase of this RepositoryBase.  # noqa: E501
        :rtype: RepositoryBase
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this RepositoryBase.


        :return: The id of this RepositoryBase.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this RepositoryBase.


        :param id: The id of this RepositoryBase.
        :type id: int
        """

        self._id = id

    @property
    def name(self):
        """Gets the name of this RepositoryBase.

        Repository name.  # noqa: E501

        :return: The name of this RepositoryBase.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this RepositoryBase.

        Repository name.  # noqa: E501

        :param name: The name of this RepositoryBase.
        :type name: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def description(self):
        """Gets the description of this RepositoryBase.

        Repository description.  # noqa: E501

        :return: The description of this RepositoryBase.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this RepositoryBase.

        Repository description.  # noqa: E501

        :param description: The description of this RepositoryBase.
        :type description: str
        """
        if description is None:
            raise ValueError("Invalid value for `description`, must not be `None`")  # noqa: E501

        self._description = description

    @property
    def repository_type(self):
        """Gets the repository_type of this RepositoryBase.


        :return: The repository_type of this RepositoryBase.
        :rtype: RepositoryType
        """
        return self._repository_type

    @repository_type.setter
    def repository_type(self, repository_type):
        """Sets the repository_type of this RepositoryBase.


        :param repository_type: The repository_type of this RepositoryBase.
        :type repository_type: RepositoryType
        """
        if repository_type is None:
            raise ValueError("Invalid value for `repository_type`, must not be `None`")  # noqa: E501

        self._repository_type = repository_type

    @property
    def repository_content_types(self):
        """Gets the repository_content_types of this RepositoryBase.

        Comma separated set of Repository Content Types  # noqa: E501

        :return: The repository_content_types of this RepositoryBase.
        :rtype: str
        """
        return self._repository_content_types

    @repository_content_types.setter
    def repository_content_types(self, repository_content_types):
        """Sets the repository_content_types of this RepositoryBase.

        Comma separated set of Repository Content Types  # noqa: E501

        :param repository_content_types: The repository_content_types of this RepositoryBase.
        :type repository_content_types: str
        """
        if repository_content_types is None:
            raise ValueError("Invalid value for `repository_content_types`, must not be `None`")  # noqa: E501

        self._repository_content_types = repository_content_types

    @property
    def auto_sync(self):
        """Gets the auto_sync of this RepositoryBase.

        Auto sync of the resources  # noqa: E501

        :return: The auto_sync of this RepositoryBase.
        :rtype: bool
        """
        return self._auto_sync

    @auto_sync.setter
    def auto_sync(self, auto_sync):
        """Sets the auto_sync of this RepositoryBase.

        Auto sync of the resources  # noqa: E501

        :param auto_sync: The auto_sync of this RepositoryBase.
        :type auto_sync: bool
        """
        if auto_sync is None:
            raise ValueError("Invalid value for `auto_sync`, must not be `None`")  # noqa: E501

        self._auto_sync = auto_sync

    @property
    def uri(self):
        """Gets the uri of this RepositoryBase.

        URI of the repository  # noqa: E501

        :return: The uri of this RepositoryBase.
        :rtype: str
        """
        return self._uri

    @uri.setter
    def uri(self, uri):
        """Sets the uri of this RepositoryBase.

        URI of the repository  # noqa: E501

        :param uri: The uri of this RepositoryBase.
        :type uri: str
        """
        if uri is None:
            raise ValueError("Invalid value for `uri`, must not be `None`")  # noqa: E501

        self._uri = uri

    @property
    def user_id(self):
        """Gets the user_id of this RepositoryBase.

        Repository keycloak user id, will be automatically be set to the logged in user  # noqa: E501

        :return: The user_id of this RepositoryBase.
        :rtype: str
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id):
        """Sets the user_id of this RepositoryBase.

        Repository keycloak user id, will be automatically be set to the logged in user  # noqa: E501

        :param user_id: The user_id of this RepositoryBase.
        :type user_id: str
        """

        self._user_id = user_id

    @property
    def used_contexts(self):
        """Gets the used_contexts of this RepositoryBase.

        List of contexts with used/referenced resources in this repository  # noqa: E501

        :return: The used_contexts of this RepositoryBase.
        :rtype: List[OSBRepositoryContext]
        """
        return self._used_contexts

    @used_contexts.setter
    def used_contexts(self, used_contexts):
        """Sets the used_contexts of this RepositoryBase.

        List of contexts with used/referenced resources in this repository  # noqa: E501

        :param used_contexts: The used_contexts of this RepositoryBase.
        :type used_contexts: List[OSBRepositoryContext]
        """

        self._used_contexts = used_contexts
