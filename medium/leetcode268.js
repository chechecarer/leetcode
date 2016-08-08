/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var i;
    nums.sort(function(a,b){
        return a-b;
    });
	for(i=0; i<nums.length; i++){
		if(nums[i] !== i){
			return i;
		}
	}
	return i;
};