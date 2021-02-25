#!/usr/bin/env python3

from flask.logging import default_handler
import atexit
import connexion
import logging
import os

from pathlib import Path

from flask import send_from_directory, request
from flask_cors import CORS

import cloudharness
from cloudharness.utils.server import init_flask, main

from workspaces.config import Config
from workspaces.repository.database import db, setup_db
from workspaces.service.events import start_kafka_consumers, stop_kafka_consumers

logger = cloudharness.log


def mkdirs():
    Path(os.path.join(Config.STATIC_DIR, Config.WORKSPACES_DIR)).mkdir(
        parents=True, exist_ok=True)


def setup_static_router(app):
    # set the static folder root to the www folder
    app.static_folder = Config.STATIC_DIR
    # remove the static route (if exists)
    app.url_map._rules_by_endpoint['static'] = []
    # add / as static route
    app.add_url_rule(f'/<path:filename>',
                     endpoint='static',
                     view_func=app.send_static_file)


def init_app(app):
    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    if app.config['ENV'] != 'development':
        cloudharness.init(Config.APP_NAME)

    try:
        setup_db(app)
    except Exception as e:
        log.error(
            "Could not init database. Some application functionality won't be available.", exc_info=True)

    try:
        atexit.register(stop_kafka_consumers)
        start_kafka_consumers()
    except Exception as e:
        log.error(
            "Could not start kafka consumers. Some application functionality won't be available.", exc_info=True)
    mkdirs()
    setup_static_router(app)


app = init_flask(title="Workspace Manager API", webapp=True, init_app_fn=init_app,
                 resolver=connexion.resolver.MethodViewResolver(
                     'workspaces.views.api'),
                 config=Config)

if __name__ == '__main__':
    cloudharness.set_debug()
    main()
