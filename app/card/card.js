'use strict';

angular.module('myApp.card', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/card', {
    templateUrl: 'card/card.html',
    controller: 'CardCtrl'
  });
}])

.controller('CardCtrl', function ($scope, $http){
  $http.get('http://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=qr5AVgGZxJgu4isyrFQMsXCGwjBbWD1z&term=IST').
          then(function(response) {
              $scope.responseApi = response.data;
            //  console.log(  $scope.responseApi[0].value);
          });
 $http.get('data/flightData.json').success(function(data) {
   $scope.data = data;
   $scope.cards = data["data"]["epower"]["cards"];
   console.log(data["data"]["epower"]);
   $scope.airports = data["data"]["epower"]["airlineAirportCodes"]["airport"];
   $scope.airlines = data["data"]["epower"]["airlineAirportCodes"]["airline"];
   $scope.departureTime = data["data"]["epower"]["cards"]["departure"];
 });
 $scope.departureChanged = function() {
      $scope.departureDate = String($("#departureDateVal").val());
      $scope.$apply();
      console.log($scope);
  }
  $scope.returnChanged = function() {
       $scope.returnDate = String($("#returnDateVal").val());
       $scope.$apply();
       console.log($scope);
   }
   $scope.airlineSelect = function(val) {

        $scope.airlineFilter = String(val.id);
        $scope.$apply();
    }
});
