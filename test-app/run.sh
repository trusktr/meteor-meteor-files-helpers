#!/bin/bash

export JASMINE_CLIENT_UNIT=0
export JASMINE_CLIENT_INTEGRATION=0
export JASMINE_SERVER_UNIT=0
export JASMINE_SERVER_INTEGRATION=1

# You need to set this environment variables to the correct values
# before you run the tests.
export EXPECTED_APP_PATH=/Users/jonas/Projects/meteor-files-helpers/test-app
export EXPECTED_METEOR_TOOL_PATH=/Users/jonas/.meteor/packages/meteor-tool/1.1.2/mt-os.osx.x86_64
export EXPECTED_METEOR_INSTALLATION_PATH=/Users/jonas/.meteor
export EXPECTED_LOCAL_PACKAGE_NODE_MODULE_PATH=
export EXPECTED_INSTALLED_PACKAGE_NODE_MODULE_PATH=

meteor --test --port 5000
