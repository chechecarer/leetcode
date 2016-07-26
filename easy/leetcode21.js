/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head;
	var p;
	var tail;
	head = tail = new ListNode(0);
	while(l1 && l2){
		if(l1.val < l2.val){
			p = new ListNode(l1.val);
			tail.next = p;
			tail = tail.next;
			l1 = l1.next;
		}else{
			p = new ListNode(l2.val);
			tail.next = p;
			tail = tail.next;
			l2 = l2.next;
		}
	}
	if(l1){
		while(l1){
			p = new ListNode(l1.val);
			tail.next = p;
			tail = tail.next;
			l1 = l1.next;
		}
	}
	if(l2){
		while(l2){
			p = new ListNode(l2.val);
			tail.next = p;
			tail = tail.next;
			l2 = l2.next;
		}
	}
	return head.next;
};