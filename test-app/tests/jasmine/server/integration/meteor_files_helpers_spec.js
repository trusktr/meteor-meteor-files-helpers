Jasmine.onTest(function () {
  'use strict'

  describe('MeteorFilesHelpers', function () {

    describe('getAppPath', function () {

      it('returns the root path of the app', function () {
        expect(MeteorFilesHelpers.getAppPath())
          .toEqual(process.env.EXPECTED_APP_PATH)
      })

    })

    describe('getMeteorToolPath', function () {

      it('return the path of the used meteor tool', function () {
        expect(MeteorFilesHelpers.getMeteorToolPath())
          .toEqual(process.env.EXPECTED_METEOR_TOOL_PATH)
      })

    })

    describe('getMeteorInstallationPath', function () {

      it('return the path of the meteor installation', function () {
        expect(MeteorFilesHelpers.getMeteorInstallationPath())
          .toEqual(process.env.EXPECTED_METEOR_INSTALLATION_PATH)
      })

    })

    describe('getNodeModulePath', function () {

      describe('when the meteor package is a local package', function () {

        it('returns the path of a node module ' +
          'that is a dependency of a Meteor package',
          function () {
            var nodeModulePath = MeteorFilesHelpers.getNodeModulePath(
              'sanjo:node-module-test',
              'fs-extra'
            )
            expect(nodeModulePath).toEqual(process.env.EXPECTED_LOCAL_PACKAGE_NODE_MODULE_PATH)
          }
        )

      })

      describe('when the meteor package is an installed package', function () {

        it('returns the path of a node module ' +
          'that is a dependency of a Meteor package',
          function () {
            var nodeModulePath = MeteorFilesHelpers.getNodeModulePath(
              'ddp',
              'sockjs'
            )
            expect(nodeModulePath).toEqual(process.env.EXPECTED_INSTALLED_PACKAGE_NODE_MODULE_PATH)
          }
        )

      })

    })

    describe('getPackageVersions', function () {

      it('returns a hash of package names and versions of this app', function () {
        // Just check one static package so we don't have to change this
        // after each update
        expect(MeteorFilesHelpers.getPackageVersions()).toEqual(
          jasmine.objectContaining({'sanjo:node-module-test': '1.0.0'})
        )
      })

    })

    describe('getPackageVersion', function () {

      it('returns the package version of the package', function () {
        expect(MeteorFilesHelpers.getPackageVersion('sanjo:node-module-test'))
          .toEqual('1.0.0');
      })

    })

    describe('isPackageInstalled', function () {

      describe('when the package is installed', function () {

        it('returns true', function () {
          expect(MeteorFilesHelpers.isPackageInstalled('meteor-tool'))
            .toBe(true)
        });

      });

      describe('when the package version is installed', function () {

        it('returns true', function () {
          expect(MeteorFilesHelpers.isPackageInstalled('meteor-tool', '1.1.3'))
            .toBe(true)
        });

      });

      describe('when the package is not installed', function () {

        it('returns true', function () {
          expect(MeteorFilesHelpers.isPackageInstalled('foo-tool')).toBe(false)
        });

      });

      describe('when the package version is not installed', function () {

        it('returns true', function () {
          expect(MeteorFilesHelpers.isPackageInstalled('meteor-tool', '0.1.0'))
            .toBe(false)
        });

      });

    });

  })
})
