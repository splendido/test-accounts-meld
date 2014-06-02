Template.notes.helpers({
	myNotes: function(){
		return Notes.find({}, {sort: {createdAt: -1}});
	}
});

Template.notes.events({
	'click #newNote': function(e, t){
		e.preventDefault();
		var $noteText = t.find('#noteText');
		var text = $noteText.value;
		if (!text)
			return;
		Meteor.call('insertNewNote', text);
		$noteText.value = "";
	}
});