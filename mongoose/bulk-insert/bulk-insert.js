var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// Define our results schema
var webSchema = new Schema(
    { "abc": String },
    { collection: "web_v2" }
);

var Webs = mongoose.model('Webs', webSchema);

mongoose.connect('mongodb://localhost:37017/test', function(err) {
    if (err) throw err;

    var resultData = [{"abc": "12121221"},{"abc": "44545"},{"abc": "545"}];

    Webs.collection.insert(resultData, function(err, doc) {
        if (err) throw  err;

        console.log('web inserted ' + doc.result.n);
        mongoose.disconnect();
    });

});