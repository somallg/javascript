angular.module('socially').directive('partiesList', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/parties/parties-list/parties-list.html',
        controllerAs: 'partiesList',
        controller: function($scope, $reactive) {
            $reactive(this).attach($scope);

            this.newParty = {};

            this.addParty = function() {
                Parties.insert(this.newParty);
                this.newParty = {};
            };

            this.removeParty = function(party) {
                Parties.remove({_id: party._id });
            };

            this.helpers({
                parties: function() {
                    return Parties.find({});
                }
            });
        }
    }
});