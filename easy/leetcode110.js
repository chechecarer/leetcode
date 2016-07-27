/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var treeDeepth = function(root){
	if(!root){
		return 0;
	}else{
		var childDep = (treeDeepth(root.left)>treeDeepth(root.right))? treeDeepth(root.left): treeDeepth(root.right);
		return childDep + 1;
	}
};

var isBalanced = function(root){
	if(!root || (!root.left && !root.right)){
		return true;
	}
	return isBalanced(root.left)&&isBalanced(root.right)&&Math.abs(treeDeepth(root.left)-treeDeepth(root.right))<=1 ? true: false;
};