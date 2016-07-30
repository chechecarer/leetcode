/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var count = k;
	var item;
	while(count){
		item = nums.pop();
		nums.unshift(item);
		count --;
	}
	return;
};