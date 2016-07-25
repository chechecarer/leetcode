/*
	function TreeNode(val){
		this.val = val;
		this.left = this.right = null;
	}
*/

var isSameTree = function(p, q){
	if(!p && !q){
		return true;
	}else if(p && q){
		if(p.val == q.val){//p and q must be not null, and then val can be accessed
			return(isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
		}else{
			return false;
		}
	}else{
		return false;
	}
	
}