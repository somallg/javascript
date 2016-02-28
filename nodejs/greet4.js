function Greetr() {
	this.greeting = 'Hello world 4';
}

Greetr.prototype.greet = function () {
	console.log(this.greeting);
}

module.exports = Greetr;