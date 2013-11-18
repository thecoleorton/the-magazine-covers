'use strict';

var BASE_URL = "https://api.parse.com" // prod
var CURRENT_ISSUE_NUMBER_PATH = "/1/classes/Issue" // prod

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap'
])
.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/'});

  $httpProvider.defaults.headers.common['X-Parse-Application-Id'] = parseApplicationKey;
  $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = parseRESTAPIKey;
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';

}]);
