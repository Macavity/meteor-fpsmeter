Package.describe({
  name: 'pape:fpsmeter',
  version: '0.3.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for darsain/fpsmeter - Enables a fps box template',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Macavity/fpsmeter.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('templating', 'client');

  api.addFiles(['fpsmeter/dist/fpsmeter.js','fpsmeter.html','fpsmeter_helper.js'], 'client', {bare: true});
});
