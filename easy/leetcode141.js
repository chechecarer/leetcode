/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head){
		return false;
	}
	var p = head;
	while(p && !p.num){//先判断p是否为null, 再访问p.num就不容易出错
		p.num = 1;
		p = p.next;
	}
	if(!p){
		return false;
	}else{
		return true;
	}
};