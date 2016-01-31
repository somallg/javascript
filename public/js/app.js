'use strict';

var jquery = require('jquery');
var Reveal = require('reveal.js');
require('bootstrap');
require('jquery.terminal');

jquery(function ($, undefined) {
  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  var terminal$ = $('#terminal');
  var error$ = $('#error');
  var enableKeyboard = true;

  if (terminal$ && terminal$.length > 0) {
    enableKeyboard = false;
    terminal$.terminal(function (command, term) {
      if (command === 'print') {
        term.echo(error$.text());
      } else {
        term.echo('Unknow command');
      }
    }, {prompt: '$ ', name: 'test', greetings: 'Type "print" to print stack trace'});
  }

  Reveal.initialize({
    history: true,

    keyboard: enableKeyboard,

    transition: 'convex'
  });
});
