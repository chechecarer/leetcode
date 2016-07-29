/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj = {};
	var result = [];
	for(var i=0; i<nums.length; i++){
		if(obj[nums[i]] !== undefined){
			result.push(obj[nums[i]]);
			result.push(i);
			break;
		}else{
			obj[target-nums[i]] = i;
		}
	}
	return result;
};