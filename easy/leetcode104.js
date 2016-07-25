/**
function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
}
*/

var maxDepth = function(root){
	if(!root){
		return 0;
	}else{
		var left = maxDepth(root.left);
		var right = maxDepth(root.right);
		return (left>right? left: right) + 1;
	}
}

