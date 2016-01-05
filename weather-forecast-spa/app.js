(function () {
    'use strict';

    // MODULE
    var weatherApp = angular.module('weatherApp', [
        'ngRoute',
        'weatherService',
        'weatherController',
        'weatherDirective'
    ]);

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
}());
