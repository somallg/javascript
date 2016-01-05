(function () {
    'use strict';

    // MODULE
    var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

    // ROUTES
    weatherApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        }).when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        }).when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        }).otherwise('/');
    }]);

    // SERVICES
    weatherApp.service('cityService', function () {
        this.city = 'New York, NY';
    });

    // CONTROLLERS
    weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
        $scope.city = cityService.city;
        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        });

        $scope.submit = function () {
            $location.path('/forecast');
        };
    }]);

    weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
        $scope.city = cityService.city;
        $scope.days = +$routeParams.days || 2;

        var weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' } });

        $scope.weatherResult = weatherApi.get({ q: $scope.city, cnt: $scope.days, appid: '6c186bd312fb6c44839158e1da4c8d1e' });

        $scope.convertToCelsius = function (temp) {
            return Math.ceil(temp - 273.15);
        };

        $scope.convertToDate = function (dt) {
            return new Date(dt * 1000);
        };
    }]);

    weatherApp.controller('weatherReportController', ['$scope', function ($scope) {
        console.log($scope);
    }]);

    weatherApp.directive('weatherReport', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/weatherReport.html',
            controller: 'weatherReportController',
            replace: true,
            scope: {
                weatherDay: '=',
                convertToStandard: '&',
                convertToDate: '&',
                dateFormat: '@'
            }
        };
    });

}());
