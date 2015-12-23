var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Home Page | Somallg',
        name: 'Tran Quang Duong',
        job: 'Web Developer',
        skills: shuffle(['javascript', 'nodejs', 'expressjs', 'mongodb', 'angularjs', 'revealjs', 'bower', 'grunt', 'design patterns','analysis', 'agile scrum', 'html', 'css', 'bootstrap', 'linux', 'mysql'])
    });
});

router.get('/test', function(req, res) {
    res.render('test', {
        title: 'Test Page | Somallg'
    })
});

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

module.exports = router;