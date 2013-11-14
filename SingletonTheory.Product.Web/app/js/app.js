'use strict';


// Declare app level module which depends on filters, and services
angular.module('singletonProduct', [
  'ngRoute',
  'singletonProduct.filters',
  'singletonProduct.services',
  'singletonProduct.directives',
  'singletonProduct.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/dashboard', { templateUrl: 'partials/dashboard.html', controller: 'ctrlDashboard' });
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
