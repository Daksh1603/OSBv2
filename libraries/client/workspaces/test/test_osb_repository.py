"""
    Workspaces manager API

    Opensource Brain Platform - Reference Workspaces manager API  # noqa: E501

    The version of the OpenAPI document: 0.2.0
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import workspaces_cli
from workspaces_cli.model.osb_repository_all_of import OSBRepositoryAllOf
from workspaces_cli.model.osb_repository_base import OSBRepositoryBase
from workspaces_cli.model.repository_content_type import RepositoryContentType
from workspaces_cli.model.repository_resource_node import RepositoryResourceNode
from workspaces_cli.model.repository_type import RepositoryType
from workspaces_cli.model.user import User
globals()['OSBRepositoryAllOf'] = OSBRepositoryAllOf
globals()['OSBRepositoryBase'] = OSBRepositoryBase
globals()['RepositoryContentType'] = RepositoryContentType
globals()['RepositoryResourceNode'] = RepositoryResourceNode
globals()['RepositoryType'] = RepositoryType
globals()['User'] = User
from workspaces_cli.model.osb_repository import OSBRepository


class TestOSBRepository(unittest.TestCase):
    """OSBRepository unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testOSBRepository(self):
        """Test OSBRepository"""
        # FIXME: construct object with mandatory attributes with example values
        # model = OSBRepository()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()