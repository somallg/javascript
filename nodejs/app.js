'use strict';

var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function () {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function () {
	console.log('Another greeting');
});

console.log('Hello!');
emtr.emit('greet');
