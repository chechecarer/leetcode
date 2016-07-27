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
var treeData = function(root, level, treeObj){
	if(!root){
		if(treeObj[level]){
			treeObj[level].push('null');
		}else{
			treeObj[level] = [];
			treeObj[level].push('null');
		}
	}else{
		if(treeObj[level]){
			treeObj[level].push(root.val);
		}else{
			treeObj[level] = [];
			treeObj[level].push(root.val);
		}
		treeData(root.left, level+1, treeObj);
		treeData(root.right, level+1, treeObj);
	}
};

var isSymmetric = function(root){
	if(!root){
		return true;
	}
	if((root.left && !root.right) || (!root.left&&root.right)){
		return false;
	}
	var treeObj = {};
	treeData(root, 0, treeObj);
// 	console.log(treeObj);
	var arr,i;
	var k = 0;
	var len = Object.keys(treeObj).length;
	while(k < len){
		if(k !== 0){
			arr = treeObj[k];
			i = 0;
			while(i <= Math.floor(arr.length/2)){
				if(arr[i] != arr[arr.length-1-i]){
					break;
				}
				i ++;
			}

			if(i <= Math.floor(arr.length/2)){

				return false;
			}
		}
		k ++;
	}
	return true;
};