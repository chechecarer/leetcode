/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
 

var pathSum = function(root, sum) {
    var result = [];
	
	if(!root){
		return result;
	}
	if(!root.left && !root.right){
		if(root.val === sum){
			result.push([root.val]);
			return result;
		}else{
			return result;
		}
	}

	var arrA = [];
	var arrB = [];
	var path = [];
	var pathLen = 0;
	var node;
	var tempNodeA;
	var tempNodeB;

	arrA.push(root);
	while(arrA.length){
		node = arrA.pop();
		arrB.push(node);
		
		if(node.right){
			arrA.push(node.right);
		}
		if(node.left){
			arrA.push(node.left);
		}
		
		pathLen += node.val;

		if(!node.left && !node.right){
			if(pathLen === sum){
				path = arrB.map(function(item){
					return item.val;
				});
				result.push(path);
			}
			path = [];

			tempNodeA = arrA[arrA.length-1];
			tempNodeB = arrB[arrB.length-1];
           
            
			while(tempNodeA != tempNodeB.left && tempNodeA!= tempNodeB.right){
			    arrB.pop();
				pathLen = pathLen-tempNodeB.val;
				tempNodeB = arrB[arrB.length-1];
			}

		}
	
	

	}
	return result;
};