var hasCycle = function(head){
	if(!head){
		return false;
	}
	var slow = head;
	var quick = head.next;
	while(quick && quick.next){
		quick = quick.next.next;
		slow = slow.next;
		if(quick == slow){
			return true;
		}
	}
	return false;

}