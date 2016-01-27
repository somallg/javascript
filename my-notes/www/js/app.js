(function () {
  'use strict';

  // Ionic Starter App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  angular
    .module('myNotes', ['ionic', 'noteStore'])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('list', {
        url: '/list',
        templateUrl: 'templates/list.html',
        controller: 'ListCtrl'
      });

      $stateProvider.state('edit', {
        url: '/edit/:noteId',
        templateUrl: 'templates/edit.html',
        controller: 'EditCtrl'
      });

      $stateProvider.state('add', {
        url: '/add',
        templateUrl: 'templates/edit.html',
        controller: 'AddCtrl'
      });

      $urlRouterProvider.otherwise('/list');
    }])

    .controller('ListCtrl', ['$scope', 'NoteStore', function ($scope, NoteStore) {
      $scope.reordering = false;
      $scope.notes = NoteStore.get();

      $scope.remove = NoteStore.remove;

      $scope.move = NoteStore.move;

      $scope.toggleReordering = function () {
        $scope.reordering = !$scope.reordering;
      };
    }])

    .controller('EditCtrl', ['$scope', '$state', 'NoteStore', function ($scope, $state, NoteStore) {
      $scope.note = angular.copy(NoteStore.find($state.params.noteId));

      $scope.save = function () {
        NoteStore.update($scope.note);
        $state.go('list');
      };
    }])

    .controller('AddCtrl', ['$scope', '$state', 'NoteStore', function ($scope, $state, NoteStore) {
      $scope.note = {
        id: new Date().getTime().toString(),
        title: '',
        description: ''
      };

      $scope.save = function () {
        NoteStore.save($scope.note);
        $state.go('list');
      };
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
