Package.describe({
  name: 'sanjo:meteor-files-helpers',
  version: '1.1.0_1',
  // Brief, one-line summary of the package.
  summary: 'Helpers for interacting with Meteor files in the filesystem',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1')
  api.export('MeteorFilesHelpers')
  api.use('underscore', 'server')
  api.use('sanjo:meteor-version@1.0.0', 'server')
  api.use('package-version-parser', 'server')
  api.addFiles([
    'lib/meteor/files.js',
    'meteor_files_helpers.js'
  ], 'server')
})
