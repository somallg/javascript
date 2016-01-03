// MODULE
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    'use strict';

    $routeProvider.
        when('/', {
            templateUrl: 'page/main.html',
            controller: 'mainController'
        }).
        when('/second', {
            templateUrl: 'page/second.html',
            controller: 'secondController'
        }).
        when('/second/:num', {
            templateUrl: 'page/second.html',
            controller: 'secondController'
        });
}]);

myApp.service('nameService', function () {
    'use strict';

    var self = this;

    this.name = 'John Doe';

    this.nameLength = function () {
        return self.name.length;
    };

});

// CONTROLLERS
myApp.controller('mainController', ['$scope', 'nameService', function ($scope, nameService) {
    'use strict';

    $scope.name = nameService.name;

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });
}]);

myApp.controller('secondController', ['$scope', '$routeParams', 'nameService', function ($scope, $routeParams, nameService) {
    'use strict';

    $scope.num = $routeParams.num || 1;

    $scope.name = nameService.name;
    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });
}]);
