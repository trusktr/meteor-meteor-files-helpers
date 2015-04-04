set VELOCITY_DEBUG=1

set JASMINE_CLIENT_UNIT=0
set JASMINE_CLIENT_INTEGRATION=0
set JASMINE_SERVER_UNIT=0
set JASMINE_SERVER_INTEGRATION=1
set JASMINE_SERVER_MIRROR_APP_PATH=C:\Users\Jonas\AppData\Local\Temp\meteor-test-run

# You need to set this environment variables to the correct values
# before you run the tests.
set EXPECTED_APP_PATH=C:\Users\Jonas\AppData\Local\Temp\meteor-test-run
set EXPECTED_METEOR_TOOL_PATH=C:\Users\Jonas\AppData\Local\.meteor\packages\velocity_meteor-tool\1.1.1_1\mt-os.windows.x86_32
set EXPECTED_METEOR_INSTALLATION_PATH=C:\Users\Jonas\AppData\Local\.meteor
set EXPECTED_LOCAL_PACKAGE_NODE_MODULE_PATH=C:\Users\Jonas\AppData\Local\Temp\meteor-test-run\.meteor\local\isopacks\sanjo_node-module-test\npm\node_modules\fs-extra
set EXPECTED_INSTALLED_PACKAGE_NODE_MODULE_PATH=C:\Users\Jonas\AppData\Local\.meteor\packages\ddp\1.1.0\npm\node_modules\sockjs

meteor --port 5000
