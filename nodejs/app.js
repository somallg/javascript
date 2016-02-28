'use strict';

var buffer = new ArrayBuffer(8); // from V8 engine
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
view[2] = 30; // no error, but no storage for 30
console.log(view);
