'use strict';

var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log('Sync: ' + greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function (err, data) {
	console.log('Async: ' + data);
});

console.log('Done!');