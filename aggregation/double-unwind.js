[{
    name: 'Foo',
    student:[{ 
        group_number: 1,
        results:[{subj: 'Math', mark: 5}, {subj: 'Info', mark: 4}, {subj: 'English', mark: 3}]
    }]
}]

db.student.aggregate([
	{ "$unwind": "$student" },
	{ "$unwind": "$student.results" },
	{ "$group": { _id: "$_id", mark_total: { $sum: "$student.results.mark" } } }
]);