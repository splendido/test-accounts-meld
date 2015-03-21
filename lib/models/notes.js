Notes = new Meteor.Collection("notes");

Meteor.methods({
	insertNewNote: function(text){
		var user_id = this.userId;
		if (!user_id)
			return;
		var note = {
			user_id: user_id,
			text: text,
			createdAt: new Date()
		};
		Notes.insert(note);
	}
});