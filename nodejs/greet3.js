function Greetr() {
	this.greeting = 'Hello world 3';
}

Greetr.prototype.greet = function () {
	console.log(this.greeting);
}

module.exports = new Greetr();