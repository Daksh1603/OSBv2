import time
from multiprocessing import Process

from cloudharness import log
from cloudharness.auth import AuthClient

# Reuse AuthClient to benefit from valid token
# AuthClient will try to refresh automatically once token expired

_auth_client = None
keycloak_running = False
nap_time = 1


def get_auth_client():
    global _auth_client, keycloak_running
    if not _auth_client:
        try:
            _auth_client = AuthClient()
            keycloak_running = True
        except Exception as e:
            raise Exception("Keycloak not available") from e
    return _auth_client
