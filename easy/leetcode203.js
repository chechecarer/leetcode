/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var nhead = new ListNode(0);
	nhead.next = head;
	var p = nhead;
	while(p.next){
		if(p.next.val === val){
			p.next = p.next.next;
		}else{
			p = p.next;
		}
	}
	return nhead.next;
};