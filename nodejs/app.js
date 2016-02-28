'use strict';

var obj = {
	greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

var arr = [];

arr.push(function () {
	console.log('Hello worl 1');
});

arr.push(function () {
	console.log('Hello worl 2');
});

arr.push(function () {
	console.log('Hello worl 3');
});

arr.forEach(function (item) {
	item();
});