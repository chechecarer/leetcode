/**
 * @param {number} n
 * @return {string}
 */
var count = function(n, obj){
	if(obj[n]){
		return ;
	}
	if(n === 1){
		obj[n] = '1';
	}else{
	    var pre;
	    if(obj[n-1] === undefined){
	        count(n-1, obj);
	    }
	    pre = obj[n-1];
		console.log(pre);
		
		var cur = pre[0];
		var cot = 1;
		var res = '';
		for(var i=1; i<pre.length; i++){
			if(pre[i] == cur){
				cot ++;
			}else{
				res += cot+''+cur;
				cur = pre[i];
				cot = 1;
			}
		}
		res += cot+''+cur;//!!!!!!!!!!记得最后一项
		obj[n] = res;
	}
	return ;

};
var countAndSay = function(n){
	var resultObj = {};
	count(n, resultObj);
	return resultObj[n];
};