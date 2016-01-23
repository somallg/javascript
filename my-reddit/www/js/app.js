(function () {
  "use strict";

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
  angular
    .module('myreddit', ['ionic', 'angularMoment', 'reddit'])

    .controller('RedditCtrl', ['$scope', 'RedditService', function ($scope, RedditService) {

      $scope.stories = [];

      function loadStories(query, fn) {
        return fn(query).$promise
          .then(function (response) {
            return response.data.children.map(function (item) {
              if (!item.data.thumbnail || item.data.thumbnail.indexOf('http') === -1) {
                item.data.thumbnail = 'http://www.redditstatic.com/icon.png';
              }
              return item.data;
            });
          });
      }

      $scope.loadOlderStories = function () {
        var query = {};

        if ($scope.stories.length) {
          query.after = $scope.stories[$scope.stories.length - 1].name;
        }

        loadStories(query, RedditService.loadFunnyStories)
          .then(function (stories) {
            console.log('loadOlderStories', stories);
            $scope.stories = $scope.stories.concat(stories);
          })
          .finally(function () {
            $scope.$broadcast('scroll.infiniteScrollComplete');
          });
      };

      $scope.loadNewerStories = function () {
        var query = {};

        if ($scope.stories.length) {
          query.before = $scope.stories[0].name;
        }

        loadStories(query, RedditService.loadFunnyStories)
          .then(function (stories) {
            console.log('loadNewerStories', stories);
            $scope.stories = stories.concat($scope.stories);
          })
          .finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
          });
      };

      $scope.onClick = function (url) {
        window.open(url, '_blank');
      };
    }])

    .run(['$ionicPlatform', function ($ionicPlatform) {

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

        if (window.cordova && window.cordova.InAppBrowser) {
          window.open = window.cordova.InAppBrowser.open;
        }

        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    }]);
}());
