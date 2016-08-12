/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flattenTravial = function(root, path){
	if(root === null){
		return;
	}
	

	if(!root.left){
		if(!root.right){
			root.right = path.pop();
			if(root.right === null){
				return;
			}else{
				flattenTravial(root.right, path);
			}
		}else{
			flattenTravial(root.right, path);
		}
		
	}else{
		if(root.right){
			path.push(root.right);		
		}
		root.right = root.left;
		root.left = null;
		flattenTravial(root.right, path);
	}	


};
var flatten = function(root) {
   var path = [];
	path.push(null);
	flattenTravial(root, path);

};