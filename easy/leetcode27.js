/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var p = 0;
	var q = nums.length -1;
	var t;
	while(p<q){
		if(nums[p] == val && nums[q] != val){
			nums[p] = nums[q];
			nums[q] = val;
			p = p+1;
			q = q-1;
		}else if(nums[p] == val && nums[q] == val){
			q = q-1;
		}else if(nums[q] != val && nums[p] !=val){
			p = p+1;
		}else{
			p = p+1;
			q = q-1;
		}
	}
	if(nums[q] == val){//考虑全是val的情况
	    return q;
	}
    else{
        return q +1;
    }
    
};