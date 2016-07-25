/*
	function ListNode(val){
		this.val = val;
		this.next = null;
	}
*/
var deleteNode = function(node){
	var nextNode = node.next;
	node.val = nextNode.val;
	node.next = nextNode.next;
}