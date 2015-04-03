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

      it('returns the path of a node module ' +
         'that is a dependency of a Meteor package',
        function () {
          var nodeModulePath = MeteorFilesHelpers.getNodeModulePath(
            'sanjo:node-module-test',
            'fs-extra'
          )
          expect(nodeModulePath).toEqual(process.env.EXPECTED_NODE_MODULE_PATH)
        }
      )

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

  })
})
