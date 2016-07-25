/*
	function TreeNode(val){
		this.val = val;
		this.left = this.right = null;
	}
*/

var invertTree = function (root) {
	if(!root){
		return null;
	}
	var t;
	if(root.left || root.right){
		t = root.left;
		root.left = root.right;
		root.right = t;
		invertTree(root.left);
		invertTree(root.right);
	}
	return root;
}