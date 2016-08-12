/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var isEqualArray3 = function(arr1, arr2){
	var l1 = arr1.length;
	var l2 = arr2.length;
	if(l1 !== l2){
		return false;
	}else{
		for(var i=0; i<l1; i++){
			if(arr1[i] !== arr2[i]){
				return false;
			}
		}
		return true;
	}
};
var threeSum = function(nums) {
    nums.sort(function(a, b){
		return a-b;
	});
	var result = [];
	var temp = [];
	var start = 0;
	var obj;
	var restSum;
	var i=0;

	var positiveStart = nums.length;
	for(i=0; i<nums.length; i++){
		if(nums[i] >=0){
			positiveStart = i;
			break;
		}
	}
	if(positiveStart === nums.length){
		return [];
	}

	for(i=0; i<positiveStart+1; i++){
		start = i;
		obj = {};
		restSum = 0-nums[start];
		j = start+1;
		while(j<nums.length){
			if(obj[nums[j]] !== undefined)
			{
				temp.push(nums[start], obj[nums[j]], nums[j]);
				result.push(temp);
				temp = [];	

			}
			else if(obj[restSum-nums[j]] === undefined){
				obj[restSum-nums[j]] = nums[j];
			}
			j ++;
		}
	}
	result.sort(function(a, b){
		if(a[0] !== b[0]){
			return a[0]-b[0];
		}else{
			if(a[1] !== b[1]){
				return a[1]-b[1];
			}else{
				return a[2]-b[2];
			}
		}
	});
	
	i = 1;
	while(i<result.length){
		if(isEqualArray3(result[i], result[i-1])){
			result.splice(i, 1);
		}else{
			i++;
		}
	}
	return result;
};