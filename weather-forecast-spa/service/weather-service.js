(function () {
    'use strict';

    var weatherService = angular.module('weatherService', ['ngResource']);

    weatherService.service('cityService', function () {
        this.city = 'New York, NY';
    });

    weatherService.service('forecastService', ['$resource', function ($resource) {

        var weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' } });

        this.getWeather = function (city, days) {
            return weatherApi.get({ q: city, cnt: days, appid: '6c186bd312fb6c44839158e1da4c8d1e' });
        };
    }]);
}());