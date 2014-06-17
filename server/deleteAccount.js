Meteor.methods({
	deleteAccount: function(){
		var userId = this.userId;
		if (userId){
			Notes.remove({user_id: userId});
			Meteor.users.remove({_id: userId});
			MeldActions.remove({
				$or: [
					{dst_user_id: userId},
					{src_user_id: userId}
				]
			});
		}
	}
});