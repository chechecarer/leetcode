var moveZeros = function (nums) {
	var offset = [];
	var zeroNum = 0;
	var i;
	for(i=0; i<nums.length; i++){
		offset[i] = zeroNum;
		if(nums[i] == 0){
			zeroNum ++;
		}
	}
	for(i=0; i<nums.length; i++){
		if(nums[i] != 0){
			nums[i-offset[i]] = nums[i];
		}
	}
	for(i=0; i<zeroNum; i++){
		nums[nums.length-1-i] = 0;
	}
}