/**
 * @param {number} n
 * @return {number}
 */

var cs = {};
var climbStairs = function(n) {
    var result;
    var c1, c2;
    if(n == 1){
        result = 1;
	}else if(n == 2){
	    result = 2;
	}else{
	    if(cs[n-1]){
	        c1 = cs[n-1];
	    }else{
	        c1 = climbStairs(n-1)
	    }
	    if(cs[n-2]){
	        c2 = cs[n-2];
	    }else{
	        c2 = climbStairs(n-2)
	    }
	    result = c1 + c2;
	}
	
	if(!cs[n]){//不能只是单纯的递归，会引起运行超时，要记录计算过的值，减少计算量
            cs[n] = result;
        }
	return result;
};