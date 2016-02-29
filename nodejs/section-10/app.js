'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});

app.get('/', function (req, res) {
   res.render('index');
});

app.get('/api/test', function (req, res) {
       var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
    });
    
    con.query('SELECT * FROM users LIMIT 10', function (err, rows) {
        if (err) throw err;
        res.json(rows[0]);
    });
});

app.get('/api/person/:id', function (req, res) {
    // get the data from db
   res.render('person', {
       ID: req.params.id,
       Qstr: req.query.qstr
   });
});

app.post('/person', urlencodedParser, function (req, res) {
    res.send('Thank you');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/api/person', jsonParser, function (req, res) {
    //res.send('Thank you for the JSON data');
    //console.log(req.body.firstname);
    //console.log(req.body.lastname);
    // save to the db
});

app.delete('/api/person/:id', function (req, res) {
    // delete from db
});

app.get('/api', function (req, res) {
    res.json({
        firstname: 'John',
        lastname: 'Doe'
    });
});

app.listen(port);