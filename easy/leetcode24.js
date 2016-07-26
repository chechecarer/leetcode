/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var p = head;
	var tail = new ListNode(0);
	tail.next = head;
	var nh = tail;
	
	var q;
	while(p && p.next){
		q = p.next;
		p.next = q.next;
		q.next = p;
		
		tail.next = q;
		tail = p;

		p = p.next;
		
	}
	return nh.next;
};