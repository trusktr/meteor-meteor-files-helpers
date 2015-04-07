var path = Npm.require('path')
var fs = Npm.require('fs')
var readFile = Meteor.wrapAsync(fs.readFile, fs)
var exists = Meteor.wrapAsync(function (path, callback) {
  fs.exists(path, function (result) {
    callback(null, result)
  })
})

MeteorFilesHelpers = {
  getAppPath: function () {
    return path.resolve(findAppDir())
  },

  getMeteorToolPath: function () {
    if (isWindows()) {
      return path.resolve(process.env.NODE_PATH, '../../..')
    } else {
      return process.env.OLDPWD
    }
  },

  getMeteorInstallationPath: function () {
    var meteorPath
    if (isWindows()) {
      meteorPath = process.env.METEOR_INSTALLATION
      if (meteorPath[meteorPath.length - 1] === '\\') {
        meteorPath = meteorPath.substr(0, meteorPath.length - 1)
      }

    } else {
      meteorPath = path.resolve(MeteorFilesHelpers.getMeteorToolPath(), '../../../..')
    }

    return meteorPath
  },

  getNodeModulePath: function (meteorPackageName, nodeModuleName) {
    var localIsopackPath = path.join(
      MeteorFilesHelpers.getAppPath(),
      '.meteor', 'local', 'isopacks',
      getFilesystemMeteorPackageName(meteorPackageName)
    )
    if (exists(localIsopackPath)) {
      return path.join(localIsopackPath, 'npm', 'node_modules', nodeModuleName)
    } else {
      if (isWindows()) {
        return path.join(
          MeteorFilesHelpers.getMeteorInstallationPath(),
          'packages',
          getFilesystemMeteorPackageName(meteorPackageName), MeteorFilesHelpers.getPackageVersion(meteorPackageName),
          'npm', 'node_modules', nodeModuleName
        )
      } else {
        return path.join(
          MeteorFilesHelpers.getAppPath(),
          '.meteor', 'local', 'build', 'programs', 'server',
          'npm', getFilesystemMeteorPackageName(meteorPackageName),
          'node_modules', nodeModuleName
        )
      }
    }
  },

  getPackageVersions: _.memoize(function () {
    var versionsFilePath = path.join(
      MeteorFilesHelpers.getAppPath(), '.meteor', 'versions'
    )
    var versionsContent = readFile(versionsFilePath, {encoding: 'utf8'})
    var versionsHash = {}
    versionsContent.split(/\r\n|\r|\n/).forEach(function (packageConstraint) {
      var parts = packageConstraint.split('@')
      var packageName = parts[0]
      var packageVersion = parts[1]
      versionsHash[packageName] = packageVersion
    })

    return versionsHash
  }),

  getPackageVersion: function (packageName) {
    var packageVersions = MeteorFilesHelpers.getPackageVersions()

    return packageVersions[packageName]
  }
}

function isWindows() {
  return process.platform === 'win32'
}

function getFilesystemMeteorPackageName(meteorPackageName) {
  var meteorVersion = MeteorVersion.getSemanticVersion()
  return (meteorVersion && PackageVersion.lessThan(meteorVersion, '1.0.4')) ?
    meteorPackageName :
    meteorPackageName.replace(':', '_')
}
