var meldDBCallback = function(src_user_id, dst_user_id){
	console.log('Migrating objects belonging to user ' + src_user_id + ' to user ' + dst_user_id);
	Notes.update({user_id: src_user_id}, {$set: {user_id: dst_user_id}}, {multi: true});
};

AccountsMeld.configure({
	askBeforeMeld: true,
	meldDBCallback: meldDBCallback
});