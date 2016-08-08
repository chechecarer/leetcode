/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var result = [];
	result[0] = 1;
	var i;
	for(i=1; i<nums.length; i++){
		result[i] = result[i-1]*nums[i-1];
	}

	var right = 1;
	for(i=nums.length-1; i>=0; i--){
		result[i] *= right;
		right *= nums[i];
	}
	return result;
};