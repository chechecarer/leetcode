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

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 var reverseList = function (head) {
 	var node;
 	var nh = null;
 	var oh = head;
 	while(oh){
 		node = new ListNode(oh.val);
 		node.next = nh;
 		nh = node;
 		oh = oh.next;
 	}
 	return nh;
 }