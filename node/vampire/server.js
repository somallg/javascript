var express = require('express');
var app = express();
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var Vampire = require('./models/vampire');
//var Ghoul = require('./models/ghoul.js');


mongoose.connect('mongodb://localhost:37017/darkthings');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.listen(3000);

console.log('server working');

// vampires ---------------------
/*var vampire1 = new Vampire({
    name: "Vangeek",
    loves: ["women", "blahblah", "cheese"],
    victims: 75
});

var vampire2 = new Vampire({
    name: "Mindy",
    loves: ["blood", "dogs", "moarblood"],
    victims: 110
});

var ghoul1 = new Ghoul({
    ghoul_type: "Monster",
    haunts: ["forest", "wood", "kawasaki"],
    graves: 30
});

var ghoul2 = new Ghoul({
    ghoul_type: "Evil Spirit",
    haunts: ["babies", "troublemakers", "scallops"],
    graves: 55
});*/
// saving ------------------------------------
// vampire1.save(function(err) {
//   if (err) console.log(err);
//   console.log(vampire1.name + ' created!');
// });
//
// vampire2.save(function(err) {
//   if (err) console.log(err);
//   console.log(vampire1.name + ' created!');
// });

// GET ----------------------------------------
app.get('/vampires', function(req, res) {
    console.log("getting /vampires");
    Vampire.find().exec(function(err, vampires) {
        if (err) throw err;
        res.send(vampires);
    });
});

/*app.get('/ghouls', function(req, res) {
    console.log("getting /ghouls");
    Ghoul.find().exec(function(err, vampires) {
        res.send(ghouls);
    });
});*/


//SHOW ------------------------------------------
app.get('/vampires/:id', function(req, res) {
    console.log("getting /vampires/"+req.params.id);
    Vampire.findOne({ _id: req.params.id }, function(err, vampire) {
    });
});

/*
app.get('/ghouls/:id', function(req, res) {
    console.log("getting /ghouls"+req.params.id);
    Ghouls.findOne({_id: req.params.id}, function(err, ghoul) {
    });
});*/
