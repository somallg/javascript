Meteor.startup(function() {
    if (Parties.find().count() === 0) {
        var parties = [
            {
                'name': 'Dubstep-Free Zone',
                'description': 'Fast just got faster with Nexus S.'
            },
            {
                'name': 'All dubstep all the time',
                'description': 'Get it on!'
            },
            {
                'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.'
            }
        ];

        parties.forEach(function(item) {
            Parties.insert(item);
        });
    }
});