/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderObj = function(root,resObj,level){
	if(!root){
		return ;
	}else{
		if(resObj[level]){
			resObj[level].push(root.val);
		}else{
			resObj[level] = [];
			resObj[level].push(root.val);
		}
		levelOrderObj(root.left, resObj, level+1);
		levelOrderObj(root.right, resObj, level+1);
	}
};

var levelOrder = function(root){
	var result = [];
	var obj = {};
	if(!root){

	}else{
		levelOrderObj(root, obj, 0);
	}
// 	console.log(obj);
	for(var key in obj){
		result.push(obj[key]);
	}
	return result;
};