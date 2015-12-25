angular.module('socially').directive('partyDetails', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/parties/party-details/party-details.html',
        controllerAs: 'partyDetails',
        controller: function($scope, $stateParams, $reactive) {
            $reactive(this).attach($scope);

            this.helpers({
                party: function() {
                    return Parties.findOne({ _id: $stateParams.partyId });
                }
            });

            this.save = function () {
                Parties.update({_id: $stateParams.partyId}, {
                    $set: {
                        name: this.party.name,
                        description: this.party.description
                    }
                }, function(err) {
                    if (err) {
                        console.log('Oops, unable to update the party...');
                    } else {
                        console.log('done');
                    }
                });
            };
        }
    }
});