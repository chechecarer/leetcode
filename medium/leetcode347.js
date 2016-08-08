/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var result = [];
	var tempArr = [];

	function Node(data, num){
		return {data:data, num: num};
	}

	var obj={};
	var i;
	for(i=0; i<nums.length; i++){
		if(obj[nums[i]] === undefined){
			obj[nums[i]] = 1;
		}else{
			obj[nums[i]]++;
		}
	}

	for(var key in obj){
		tempArr.push(new Node(key, obj[key]));
	}
	tempArr.sort(function(a, b){
		return b.num-a.num;
	});
    
    result = tempArr.map(function(item){
        return parseInt(item.data);
    });
	result.length = k;
	return result;
};