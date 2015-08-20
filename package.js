Package.describe({
  summary: "Cordova enabled foreground geolocation, not when closed/suspended",
  version: "0.0.3",
  name: "rodcope:cordova-geolocation-foreground",
  git: "https://github.com/rodcope/meteor-cordova-geolocation-foreground"
});

Cordova.depends({
  'org.apache.cordova.geolocation': '0.3.12'
});


Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use('underscore', 'client');
  api.export('GeolocationFG', 'client');
  api.addFiles('cordova-geolocation.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zeroasterisk:cordova-geolocation-foreground');
  api.addFiles('cordova-geolocation-tests.js', 'client');
});
