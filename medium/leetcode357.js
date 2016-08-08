/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    var num = [];
	var result = 0;
	num[0] = 1;
	num[1] = 9;
	var i;
	for(i=2; i<=10; i++){
		num[i] = num[i-1]*(11-i);
	}

    if(n>10){
        n = 10;
    }
	for(i=0; i<=n; i++){
		result += num[i];
	}
	return result;
};