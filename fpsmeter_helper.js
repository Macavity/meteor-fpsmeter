
if(Meteor.isClient){

    Template.fpsMeter.helpers({
        fpsmeter: function() {
            console.log("fpsmeter called");
            var meter = new FPSMeter( );
            return "";
        }
    });

    Template.fpsMeter.rendered = function() {
        console.log("fpsmeter rendered");
    };
}
