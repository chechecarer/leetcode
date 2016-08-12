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
 
 var inOrder = function(root, path){
	if(root === null){
		return;
	}
	inOrder(root.left, path);
	path.push(root.val);
	inOrder(root.right, path);
};
var isValidBST = function(root) {
    var path = [];
	inOrder(root, path);
	for(var i=0; i<path.length-1; i++){
		if(path[i] >= path[i+1]){
			return false;
		}
	}
	return true;
};