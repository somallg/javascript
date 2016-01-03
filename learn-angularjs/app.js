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

    $scope.people = [
        {
            name: 'John Snow',
            street: '123 Main Street',
            city: 'New York',
            zip: '11111'
        },
        {
            name: 'Janes Snow',
            street: '456 Second Street',
            city: 'New York',
            zip: '22222'
        },
        {
            name: 'Geogre Snow',
            street: '333 Third Street',
            city: 'New York',
            zip: '33333'
        }
    ];

    $scope.formattedAddress = function (p) {
        return p.street + ', ' + p.city + ', ' + p.zip;
    };
}]);

myApp.controller('secondController', ['$scope', '$routeParams', 'nameService', function ($scope, $routeParams, nameService) {
    'use strict';

    $scope.num = $routeParams.num || 1;

    $scope.name = nameService.name;
    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });
}]);

myApp.directive('searchResult', function () {
    'use strict';

    return {
        restrict: 'AECM',
        templateUrl: 'template/search-result.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddress: "&"
        },
        link: function (scope, elems, attrs) {
            console.log('Post-link...');
            console.log(scope);
            console.log(elems);
        },
        transclude: true
    };
});