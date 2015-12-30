// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    'use strict';
    $scope.handle = '';

    $scope.handleToLowerCase = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $scope.rules = [
        { rulename: 'Must be less than 5 characters' },
        { rulename: 'Must be more than 5 characters' },
        { rulename: 'Must be cool' }
    ];
}]);