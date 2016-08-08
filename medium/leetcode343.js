/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n === 2){
		return 1;
	}
	if(n === 3){
		return 2;
	}
	var result = 1;
	var num;

	result = 3;
	num = n-3;
	while(num >0){
		if(num >= 3){
			num = num-3;
			result = result*3;
			
		}else {
			if(num >= 2){
				result = result*2;
				num = num-2;
			}else{
				result = result/3;
				result = result *2;
				num = num -2;
				result = result*2;
			}
		}
	}
	return result;
};