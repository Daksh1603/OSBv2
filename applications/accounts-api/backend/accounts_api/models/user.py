# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from accounts_api.models.base_model_ import Model
from accounts_api import util


class User(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, username=None, email=None, first_name=None, last_name=None, groups=None, profiles=None, registration_date=None, avatar=None, website=None):  # noqa: E501
        """User - a model defined in OpenAPI

        :param id: The id of this User.  # noqa: E501
        :type id: str
        :param username: The username of this User.  # noqa: E501
        :type username: str
        :param email: The email of this User.  # noqa: E501
        :type email: str
        :param first_name: The first_name of this User.  # noqa: E501
        :type first_name: str
        :param last_name: The last_name of this User.  # noqa: E501
        :type last_name: str
        :param groups: The groups of this User.  # noqa: E501
        :type groups: List[str]
        :param profiles: The profiles of this User.  # noqa: E501
        :type profiles: Dict[str, object]
        :param registration_date: The registration_date of this User.  # noqa: E501
        :type registration_date: date
        :param avatar: The avatar of this User.  # noqa: E501
        :type avatar: str
        :param website: The website of this User.  # noqa: E501
        :type website: str
        """
        self.openapi_types = {
            'id': str,
            'username': str,
            'email': str,
            'first_name': str,
            'last_name': str,
            'groups': List[str],
            'profiles': Dict[str, object],
            'registration_date': date,
            'avatar': str,
            'website': str
        }

        self.attribute_map = {
            'id': 'id',
            'username': 'username',
            'email': 'email',
            'first_name': 'firstName',
            'last_name': 'lastName',
            'groups': 'groups',
            'profiles': 'profiles',
            'registration_date': 'registrationDate',
            'avatar': 'avatar',
            'website': 'website'
        }

        self._id = id
        self._username = username
        self._email = email
        self._first_name = first_name
        self._last_name = last_name
        self._groups = groups
        self._profiles = profiles
        self._registration_date = registration_date
        self._avatar = avatar
        self._website = website

    @classmethod
    def from_dict(cls, dikt) -> 'User':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The User of this User.  # noqa: E501
        :rtype: User
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this User.

        user id  # noqa: E501

        :return: The id of this User.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this User.

        user id  # noqa: E501

        :param id: The id of this User.
        :type id: str
        """

        self._id = id

    @property
    def username(self):
        """Gets the username of this User.

        Username of the keycloak user  # noqa: E501

        :return: The username of this User.
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username):
        """Sets the username of this User.

        Username of the keycloak user  # noqa: E501

        :param username: The username of this User.
        :type username: str
        """

        self._username = username

    @property
    def email(self):
        """Gets the email of this User.

        Email address of the keycloak user  # noqa: E501

        :return: The email of this User.
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this User.

        Email address of the keycloak user  # noqa: E501

        :param email: The email of this User.
        :type email: str
        """

        self._email = email

    @property
    def first_name(self):
        """Gets the first_name of this User.

        First Name of the keycloak user  # noqa: E501

        :return: The first_name of this User.
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name):
        """Sets the first_name of this User.

        First Name of the keycloak user  # noqa: E501

        :param first_name: The first_name of this User.
        :type first_name: str
        """

        self._first_name = first_name

    @property
    def last_name(self):
        """Gets the last_name of this User.

        Last Name of the keycloak user  # noqa: E501

        :return: The last_name of this User.
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name):
        """Sets the last_name of this User.

        Last Name of the keycloak user  # noqa: E501

        :param last_name: The last_name of this User.
        :type last_name: str
        """

        self._last_name = last_name

    @property
    def groups(self):
        """Gets the groups of this User.


        :return: The groups of this User.
        :rtype: List[str]
        """
        return self._groups

    @groups.setter
    def groups(self, groups):
        """Sets the groups of this User.


        :param groups: The groups of this User.
        :type groups: List[str]
        """

        self._groups = groups

    @property
    def profiles(self):
        """Gets the profiles of this User.

        sddssd  # noqa: E501

        :return: The profiles of this User.
        :rtype: Dict[str, object]
        """
        return self._profiles

    @profiles.setter
    def profiles(self, profiles):
        """Sets the profiles of this User.

        sddssd  # noqa: E501

        :param profiles: The profiles of this User.
        :type profiles: Dict[str, object]
        """

        self._profiles = profiles

    @property
    def registration_date(self):
        """Gets the registration_date of this User.


        :return: The registration_date of this User.
        :rtype: date
        """
        return self._registration_date

    @registration_date.setter
    def registration_date(self, registration_date):
        """Sets the registration_date of this User.


        :param registration_date: The registration_date of this User.
        :type registration_date: date
        """

        self._registration_date = registration_date

    @property
    def avatar(self):
        """Gets the avatar of this User.


        :return: The avatar of this User.
        :rtype: str
        """
        return self._avatar

    @avatar.setter
    def avatar(self, avatar):
        """Sets the avatar of this User.


        :param avatar: The avatar of this User.
        :type avatar: str
        """

        self._avatar = avatar

    @property
    def website(self):
        """Gets the website of this User.


        :return: The website of this User.
        :rtype: str
        """
        return self._website

    @website.setter
    def website(self, website):
        """Sets the website of this User.


        :param website: The website of this User.
        :type website: str
        """

        self._website = website