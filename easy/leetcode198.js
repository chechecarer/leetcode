/**
 * @param {number[]} nums
 * @return {number}
 */
var robber = function(nums, start, record){
    var result ;
    if(nums.length === 0){
        result =  0;
    }else if(nums.length == 1){
        return nums[0];
    }else{
        var sub1 = nums.slice(2);
        var sub2 = nums.slice(3);
        var n0;
        var n1;
        if(record[start+2]+'' !== 'undefined'){//判断一个对象属性是否存在用‘undefined’，但是比较之前要先将转化为字符串，即+''
            n0 = record[start+2];
        }else{
            n0 = robber(sub1, start+2 ,record);
        }
        if(record[start+3]+'' !== 'undefined'){
            n1 = record[start+3];
        }else{
            n1 = robber(sub2, start+3, record);
        }
        result =  (n0+nums[0])>(n1+nums[1])?(n0+nums[0]):(n1+nums[1]);
    }
    record[start] = result;
    return result;
};
var rob = function(nums){
    var record = {};
    var start = 0;
    var result = robber(nums, start, record);
    return result
};