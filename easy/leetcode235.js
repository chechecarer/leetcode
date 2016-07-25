var findNode = function(root, n){
	if(!root){
		return false;
	}
	if(root.val == n){
		return true;
	}else{
		return findNode(root.left, n)||findNode(root.right, n);
	}
};

var lowestCommonAncestor = function(root, p, q){
	// var result;
	var t;
	if(!root){
		result = null;
	}else if(root.val == p.val){
		if(findNode(root.left, q.val) || findNode(root.right, q.val)){
			return root;
		}

	}else if(root.val == q.val){
		if(findNode(root.left, p.val) || findNode(root.right), p.val){
			return root;
		}

	}else{
		if(findNode(root.left, p.val) && findNode(root.left, q.val)){
			return lowestCommonAncestor(root.left, p, q);
		}else if(findNode(root.right, p.val) && findNode(root.right, q.val)){
			return lowestCommonAncestor(root.right, p, q);
		}else{
			return root;
		}
	}

}