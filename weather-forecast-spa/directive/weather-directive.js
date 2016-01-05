(function () {
    'use strict';

    var weatherDirective = angular.module('weatherDirective', []);

    weatherDirective.directive('weatherReport', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/weatherReport.html',
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