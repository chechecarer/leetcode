/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.data = nums;
	this.dataSum = [];
	var sum = 0;
	for(var i=0; i<nums.length; i++){
		sum += nums[i];
		this.dataSum.push(sum);
	}
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
   if(i === j){
		return this.data[i];
	}else{
		if(i === 0){
			return this.dataSum[j];
		}else{
			return this.dataSum[j]-this.dataSum[i-1];
		}
		
	}
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */