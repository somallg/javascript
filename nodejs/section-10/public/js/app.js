'use strict';

angular
    .module('TestApp', [])
    .controller('MainController', function () {
       this.message = 'Hello World';
       
       this.people = [
           { name: 'John Doe' },
           { name: 'Jane Doe' },
           { name: 'Jime Doe' }
       ];
    });