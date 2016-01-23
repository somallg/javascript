(function () {
  "use strict";

  angular
    .module('reddit', ['ngResource'])
    .factory('RedditService', ['$resource', function ($resource) {
      var factory = {},
        androidApi = $resource('https://www.reddit.com/r/Android/new/.json'),
        funnyApi = $resource('https://www.reddit.com/r/funny/new/.json');

      factory.loadAndroidStories = androidApi.get;

      factory.loadFunnyStories = funnyApi.get;

      return factory;
    }]);

}());
