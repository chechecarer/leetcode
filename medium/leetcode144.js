/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preOrder = function(root, path){
	if(root === null){
		return;
	}else{
		path.push(root.val);
		preOrder(root.left, path);
		preOrder(root.right, path);
	}
};
var preorderTraversal = function(root) {
    var result = [];
	preOrder(root, result);
	return result;
};