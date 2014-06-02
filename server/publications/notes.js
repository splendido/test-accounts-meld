
Meteor.publish("myNotes", function() {
    return Notes.find({user_id: this.userId});
});