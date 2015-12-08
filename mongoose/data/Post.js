[{
    "_id" : ObjectId("56651f0e4905bd041cad0413"),
    "creator" : ObjectId("566299dd17990464160ae27a"),
    "content" : "this is my joke 2",
    "created" : ISODate("2015-12-07T05:54:22.858Z"),
    "__v" : 15,
    "comments" : [
        {
            "posteruserId" : "5665e6867185d87c1e71dbdc",
            "postedBy" : "lawrence nwoko",
            "postterscomment" : "good joke",
            "_id" : ObjectId("56660745f644c2501116acce")
        },
        {
            "posteruserId" : "5665e6867185d87c1e71dbdc",
            "postedBy" : "lawrence nwoko",
            "postterscomment" : "good joke",
            "_id" : ObjectId("56660b6d33c245c012104fdc")
        }
    ]
}]

db.posts.find({_id: ObjectId("56651f0e4905bd041cad0413"), 'comments._id' : ObjectId("56660745f644c2501116acce")});

db.posts.update({_id: ObjectId("56651f0e4905bd041cad0413"), 'comments._id' : ObjectId("56660745f644c2501116acce")},
    {'$set': { 'comments.$.postterscomment': "working" }})