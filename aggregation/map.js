[{ _id: 1, quizzes: [ 5, 6, 7 ] },
{ _id: 2, quizzes: [ ] },
{ _id: 3, quizzes: [ 3, 8, 9 ] }]

db.grades.aggregate([
	{ "$project" : {
		quizzes: {
			"$setDifference": [{
				$map: {
					input: "$quizzes",
					as: "grade",
					in: { "$cond": [
						{ "$eq": ["$$grade", 5] }, "$$grade", false
					] }
				}
			}, [false]]
		}
		}
	}	
]);