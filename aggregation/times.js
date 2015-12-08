db.times.insert({ time: [
    { startAt: new Date(2015,1, 1), endAt: new Date(2015, 1, 1, 17, 30) },
    { startAt: new Date(2015,2, 2), endAt: new Date(2015, 2, 2, 18, 30) }
]});

db.times.insert({ time: [
    { startAt: new Date(2014,1, 1), endAt: new Date(2016, 1, 1, 17, 30) },
    { startAt: new Date(2014,2, 2), endAt: new Date(2015, 2, 2, 18, 30) }
]});

db.times.insert({ time: [
    { startAt: new Date(2014,1, 1), endAt: new Date(2016, 1, 1, 16, 30) },
    { startAt: new Date(2014,2, 2), endAt: new Date(2015, 2, 2, 18, 30) }
]});

db.times.aggregate([
    { $match: { $and: [ {"time.endAt": { $gt: new Date("2016-1-1") } } ] } },
    { $project: { hour: { $hour: "$time.endAt" } } }
]);