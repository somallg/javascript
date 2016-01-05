(function () {
    'use strict';

    var weatherController = angular.module('weatherController', []);

    weatherController.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
        $scope.city = cityService.city;
        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        });

        $scope.submit = function () {
            $location.path('/forecast');
        };
    }]);

    weatherController.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'forecastService',  function ($scope, $resource, $routeParams, cityService, forecastService) {
        $scope.city = cityService.city;
        $scope.days = +$routeParams.days || 2;

        $scope.weatherResult = forecastService.getWeather($scope.city, $scope.days);

        $scope.convertToCelsius = function (temp) {
            return Math.ceil(temp - 273.15);
        };

        $scope.convertToDate = function (dt) {
            return new Date(dt * 1000);
        };
    }]);
}());