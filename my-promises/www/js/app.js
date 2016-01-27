(function () {
  'use strict';
  // Ionic Starter App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  angular.module('starter', ['ionic'])

    .controller('AppCtrl', ['$scope', '$q', function ($scope, $q) {
      function add(x, y) {
        var q = $q.defer();
        setTimeout(function () {
          var res = x + y;

          if (res >= 0) {
            q.resolve(res);
          } else {
            q.reject('negative value: ' + res);
          }

        }, 100);

        return q.promise;
      }

      var startTime = Date.now();

      var p = add(5, -12)
        .then(function (res) {
        })
        .then(function (res) {
          return add(res, 1);
        }, function (err) {
          return add(1, 2);
        })
        .then(function (res) {
          return res + 100;
        })
        .then(function (res) {
          return res * 100;
        })
        .then(function (res) {
          $scope.result = res;
        })
        .catch(function (err) {
          $scope.error = err;
        })
        .finally(function () {
          $scope.elapsedTime = Date.now() - startTime;
        });

      /*      add(5, 2, function (res) {
       add(res, 3, function (res) {
       $scope.result = res;
       $scope.elapsedTime = Date.now() - startTime;
       });
       });*/

    }])

    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          // Don't remove this line unless you know what you are doing. It stops the viewport
          // from snapping when text inputs are focused. Ionic handles this internally for
          // a much nicer keyboard experience.
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });

}());
