var majorityElement = function(nums){
	var no = {};
	var i;
	var nl = nums.length;
	for(i=0; i<nl; i++){
		if(no[nums[i]]){
			no[nums[i]] ++;
		}else{
			no[nums[i]] = 1;
		}
	}
	for(var key in no){
		if(no[key] > Math.floor(nl/2)){
			return parseInt(key);
		}
	}
}