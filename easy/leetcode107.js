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

 //要搞清楚题意再继续，不然一定会浪费很多时间和精力在与题目无关的问题上
var levelOrder = function(root,resObj,level){
	if(!root){
		return ;
	}else{
		if(resObj[level]){
			resObj[level].push(root.val);
		}else{
			resObj[level] = [];
			resObj[level].push(root.val);
		}
		levelOrder(root.left, resObj, level+1);
		levelOrder(root.right, resObj, level+1);
	}
}

var levelOrderBottom = function(root){
	var result = [];
	var obj = {};
	if(!root){

	}else{
		levelOrder(root, obj, 0);
	}
// 	console.log(obj);
	for(var key in obj){
		result.unshift(obj[key]);
	}
	return result;
};