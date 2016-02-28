'use strict';

var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var gzip = zlib.createGzip();

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);