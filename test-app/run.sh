#!/bin/bash

export JASMINE_CLIENT_UNIT=0
export JASMINE_CLIENT_INTEGRATION=0
export JASMINE_SERVER_UNIT=0
export JASMINE_SERVER_INTEGRATION=1
export JASMINE_SERVER_MIRROR_APP_PATH=/Users/jonas/tmp/meteor-test-run

# You need to set this environment variables to the correct values
# before you run the tests.
export EXPECTED_APP_PATH=/Users/jonas/tmp/meteor-test-run
export EXPECTED_METEOR_TOOL_PATH=/Users/jonas/.meteor/packages/velocity_meteor-tool/1.1.1_1/mt-os.osx.x86_64
export EXPECTED_METEOR_INSTALLATION_PATH=/Users/jonas/.meteor
export EXPECTED_LOCAL_PACKAGE_NODE_MODULE_PATH=/Users/jonas/tmp/meteor-test-run/.meteor/local/isopacks/sanjo_node-module-test/npm/node_modules/fs-extra
export EXPECTED_INSTALLED_PACKAGE_NODE_MODULE_PATH=/Users/jonas/tmp/meteor-test-run/.meteor/local/build/programs/server/npm/ddp/node_modules/sockjs

meteor --test --port 5000
