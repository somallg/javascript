var MongoClient = require('mongodb').MongoClient,
    test = require('assert');

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

    // Create a collection
    var collection = db.collection('simple_sort_collection');

    // Insert some documents we can sort on
    collection.insertMany([{a:1}, {a:2}, {a:3}], {w:1}, function(err, docs) {
        test.equal(null, err);

        // Do normal ascending sort
        collection.find().sort({'a': 1}).each(function(err, item) {
            test.equal(null, err);

            if (item != null) {
                console.log(item);
            } else {
                console.log('====================');
                collection.find().sort({a: -1}).each(function(err, item) {
                    test.equal(null, err);

                    if (item != null) {
                        console.log(item);
                    } else {
                        db.close();
                    }
                });
            }
        });
    });
});