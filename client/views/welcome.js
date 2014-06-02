Template.welcome.events({
    'click #delAccount': function(event, t){
        event.preventDefault();
        event.stopPropagation();
        $("#delAccount").blur();
        console.log("Deleting account...");
        Meteor.call('deleteAccount');
    },
});