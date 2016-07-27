/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0){
		return 0;
	}
	var nextPos = 1;
	var i = 1;
	while(i<nums.length){
		if(nums[i] !== nums[i-1]){
			nums[nextPos] = nums[i];
			nextPos ++;
		}
        i ++;
	}
	return nextPos;
};