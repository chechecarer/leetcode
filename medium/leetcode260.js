/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var result = [];
	var obj={};
	var i;
	for(i=0; i<nums.length; i++){
		if(obj[nums[i]] === undefined){
			obj[nums[i]] = 1;
		}else{
			obj[nums[i]] ++;
		}
	}
	for(var key in obj){
		if(obj[key] === 1){
			result.push(parseInt(key));
			if(result.length === 2){
				break;
			}
			
		}
	}
	return result;
};