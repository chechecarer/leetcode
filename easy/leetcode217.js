var containDuplicate = function(nums){
	var no = {};
	var nl = nums.length;
	var i;
	for(i=0; i<nl; i++){
		if(no[nums[i]]){
			return true;
		}else{
			no[nums[i]] = 1;
		}
	}
	return false;
}