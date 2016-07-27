/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    var depth = 1;
	var arr = [];
	var i;
	if(!root){
	    return 0;
	}
	arr.push({'node':root, 'd':depth});
	i = 0;
	while(i<arr.length){
		if(!arr[i].node.left && !arr[i].node.right){
			return arr[i].d;
		}else{
			if(arr[i].node.left){
				arr.push({'node': arr[i].node.left, 'd': arr[i].d+1});
			}
			if(arr[i].node.right){
				arr.push({'node': arr[i].node.right, 'd': arr[i].d+1});
			}
		}
		i ++;
	}
	
};