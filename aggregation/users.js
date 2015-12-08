[{
  "firstName" : "Mark",
  "gender" : "M",
  "PictureList":[]
},
{
  "firstName" : "Jane",
  "gender" : "F",
  "PictureList":[]
},
{
  "firstName" : "Mary",
  "gender" : "F",
  "PictureList" : [{"name" : "20151128_233939.jpg","dpInd" : "N"}, 
                   {"name" : "20150712_231715.jpg","dpInd" : "Y"}]
}]

db.users.aggregate([
	{ "$match" : { gender: "F" } },
  { "$project": { _id: "$_id", firstName: "$firstName", gender: "$gender", 
    PictureList: { $setDifference: [{
      "$map": {
        input: "$PictureList",
        as: "picture",
        in: { "$cond": { if: { "$eq": ["$$picture.dpInd", "Y"] }, then: "$$picture", else: false } }
      }
    }, [false]] } } }
]);