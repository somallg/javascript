'use strict';

var express = require('express');
var router = express.Router();
var _ = require('underscore');

// GET home page
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Home Page | Somallg',
    name: 'Duong Tran',
    job: 'Fullstack Web Developer',
    skills: _.shuffle(['javascript', 'nodejs', 'expressjs', 'mongodb', 'angularjs', 'revealjs', 'bower', 'grunt', 'design patterns', 'analysis', 'agile scrum', 'html', 'css', 'bootstrap', 'linux', 'mysql'])
  });
});

router.get('/test', function (req, res) {
  res.render('test', {
    title: 'Test Page | Somallg'
  });
});


module.exports = router;
