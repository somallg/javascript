function loadUsers(userIds, load, done) {
    var user = [];
    var count = 0;

    userIds.forEach(function(id, index) {
        load(id, function(user) {
            users[index] = user;
            if (++count == userIds.length) return done(users);
        })
    });
}

module.exports = loadUsers;