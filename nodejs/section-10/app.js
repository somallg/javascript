'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/addressbook');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = new Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main Street',
    greet: function () {
        console.log('abc');
    }
});

john.save(function (err) {
    if (err) throw err;
    
    console.log('person saved');
});

var jane = new Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 Main Street'
});

jane.save(function(err) {
   if (err) throw err;
   
   console.log('person saved'); 
});

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
    Person.find({}, function (err, users) {
        if (err) throw err;
        
        res.json(users);
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