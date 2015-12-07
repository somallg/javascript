var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    username: String,
    HireDate: Date
});

var User = mongoose.model('User', userSchema);
