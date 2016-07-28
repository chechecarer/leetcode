/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var p, q;
    var nhead = new ListNode(0);//在链表头部增加一个节点，方便处理head节点
    nhead.next = head;
    p = q = nhead;
    
	var i;
	for(i=0;i<n+1;i++){
		q = q.next;
	}
	while(q){
		p = p.next;
		q = q.next;
	}
	p.next = p.next.next;
	return nhead.next;
};