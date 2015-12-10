var mongoose = require('mongoose');

var vampireSchema = new mongoose.Schema({
    name: String,
    loves: Array,
    victims: Number
});

var Vampire = mongoose.model('Vampire', vampireSchema);
module.exports = Vampire;