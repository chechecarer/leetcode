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
 
 var inOrder = function(root, path){
	if(root === null){
		return;
	}
	inOrder(root.left, path);
	path.push(root.val);
	inOrder(root.right, path);
};
var inorderTraversal = function(root) {
    var path = [];
	inOrder(root, path);
	return path;
};