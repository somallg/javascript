(function () {
  'use strict';

  angular
    .module('noteStore', [])
    .factory('NoteStore', [function () {

      var notes = angular.fromJson(window.localStorage.notes || '[]');

      function persist() {
        window.localStorage.notes = angular.toJson(notes);
      }

      return {
        get: function () {
          return notes;
        },

        find: function (noteId) {
          var n = {};
          notes.forEach(function (item) {
            if (item.id === noteId) {
              n = item;
            }
          });

          return n;
        },

        update: function (note) {
          notes.forEach(function (item) {
            if (item.id === note.id) {
              item.title = note.title;
              item.description = note.description;
              persist();
            }
          });
        },

        save: function (note) {
          notes.push(note);
          persist();
        }
      };
    }]);

}());
