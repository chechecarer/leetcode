/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var a = headA;
	var b = headB;
	var al, bl;
	al = 0;
	bl = 0;
	while(a){
		al ++;
		a = a.next;
	}
	while(b){
		bl ++;
		b = b.next;
	}

	a = headA;
	b = headB;

	if(al > bl){
		while(al > bl){
			a = a.next;
			al --;
		}
	}else if(bl > al){
		while(bl > al){
			b = b.next;
			bl --;
		}
		
	}
	
	while(a && b){
		if(a === b){
			return a;
		}else{
			a = a.next;
			b = b.next;
		}
	}
	return null;
};