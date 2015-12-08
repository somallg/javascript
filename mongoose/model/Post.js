var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var Comments = new Schema({
    _id: ObjectId,
    posteruserId: String,
    postedBy: String,
    postterscomment: String
});

var postSchema = new Schema({
    _id: ObjectId,
    creator: ObjectId,
    content: String,
    __v: Number,
    comments: [Comments]
});

var Post = mongoose.model('Post', postSchema);


mongoose.connect('mongodb://localhost:37017/test', function(err) {
    if (err) throw err;

/*    Post.find().exec(function(err, item) {
         if (err) throw  err;

         console.log(item);

         mongoose.disconnect();
    });*/
    Post.update({_id: "56651f0e4905bd041cad0413", 'comments._id' : "56660745f644c2501116acce"},
        {'$set': {
            'comments.$.postterscomment': "working"
        }},

        function(err, numAffected) {
            if(err){
                console.log(err)
            }else{
                console.log(numAffected);
                mongoose.disconnect();
            }
        }
    );
});