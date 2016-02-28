'use strict';

var util = require('util');

var name = 'Tony';
var greeting = util.format('Hello, %s, %s', name, 'test');

util.log(greeting);