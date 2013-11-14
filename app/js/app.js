'use strict';

/* var BASE_URL = "http://localhost:3000/" // dev */
var BASE_URL = "http://the-magazine-covers.org:8080/" // prod

var CURRENT_ISSUE_NUMBER_PATH = "api/current_issue_number"

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
