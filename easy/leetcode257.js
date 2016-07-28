/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
	var nodes = [];
	var path = [];
	var node;
	if(!root){
		return result;
	}
	nodes.push(root);
	while(nodes.length){
		node = nodes.pop();
		if(path.length){//删掉路径中不是当前节点父亲的节点
		    while(node !== path[path.length-1].left && node !==path[path.length-1].right){
    		    path.pop();
    		}
		}
		
		path.push(node);//先从nodes栈中取出，然后再压倒path中
		if(!node.left && !node.right){
			result.unshift(path.map(function(n){return n.val}).join('->'));//存储节点对象，方便回溯
			path.pop();
		}
		if(node.left){//如果存在左孩子，就把左孩子节点压入nodes栈中
			nodes.push(node.left);
		}
		if(node.right){//如果存在右孩子，就把右孩子节点压入nodes栈中
			nodes.push(node.right);
		}

	}
	return result;
};