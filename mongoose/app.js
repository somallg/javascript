var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name: String,
    HiredDate: Date
});

var User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:37017/test', function(err) {
    if (err) throw err;

/*    User.find().exec(function(err, item) {
        if (err) throw  err;

        console.log(item);

        mongoose.disconnect();
    });*/
    User.aggregate([
        { $match: { HiredDate: { $lt: new Date("2016-01-01"), $gte: new Date("2015-01-01") } } },
        { $project: { _id: { year: {$year: '$HiredDate'} },
                      hiredDateValue: { year: { $year: '$HiredDate' } }
                      //hireDateCount: {$cond: [{"$and":[{"$or":[{"$eq":["$HireDate","1994-01-17 00:00:00.000"]}]}]}, 1, 0]}
        }},
        { $group: { _id: '$hiredDateValue', count: { $sum: 1 } }}
    ]).exec(function(err, item) {
        console.log(item);
        mongoose.disconnect();
    });

});