Package.describe({
  name: 'sanjo:node-module-test',
  version: '1.0.0'
});

Npm.depends({
  'fs-extra': '0.12.0'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');
});
