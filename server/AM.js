var meldDBCallback = function(src_user_id, dst_user_id){
	Notes.update({user_id: src_user_id}, {$set: {user_id: dst_user_id}}, {multi: true});
};

AccountsMeld.configure({
	askBeforeMeld: true,
	meldDBCallback: meldDBCallback
});