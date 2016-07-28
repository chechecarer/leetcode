/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var obj = {};
	var i;
	for(i=0; i<nums.length; i++){
		if(obj[nums[i]] !== undefined){
			if(i-obj[nums[i]] <= k){
				return true;
			}else{
			    obj[nums[i]] = i;
			}
		}else{
			obj[nums[i]] = i;
		}
	}
	return false;
};