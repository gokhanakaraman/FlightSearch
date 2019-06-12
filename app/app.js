'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.card',
  'myApp.version'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/card'});
}])
.controller('mainController',function($rootScope, $http) {
   $scope.whichWay = function (val) {
     if (val==1) {
           document.getElementById("returnDate").style.pointerEvents  = "all";
     }
     else if(val==0) {
         document.getElementById("returnDate").style.pointerEvents  = "none";
     }
   }
});
