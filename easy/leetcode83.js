var deleteDuplicates = function(head){
	//Line 14: TypeError: Cannot read property 'next' of null
	if(!head){
		return head;
	}
	var oh = head;
	while(oh.next){
		if(oh.val == oh.next.val){
			oh.next = oh.next.next;
		}else{
			oh = oh.next;
		}
	}
	return head;
}