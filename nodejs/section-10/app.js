'use strict';

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var people = [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
    { name: 'Jime Doe' }
];

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});

app.get('/', function (req, res) {
   res.render('index', {
       people: people
   });
});

app.listen(port);