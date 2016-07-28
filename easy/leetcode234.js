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
var isPalindrome = function(head) {
    if(!head){
		return true;
	}
	var l = [];
	var r = [];
	var p = head;
	while(p){
		l.push(p.val);
		r.unshift(p.val);
		p = p.next;
	}
	var i;
	for(i=0; i<l.length; i++){
	    if(l[i] !== r[i]){
	        return false;
	    }
	}
	return true;
};