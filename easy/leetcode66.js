/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var l = digits.length;
	var i;
	var c = 1;
	for(i=l-1; i>=0; i--){
		digits[i] += c;
		c = 0;
		if(digits[i] >= 10){
			c = 1;
			digits[i] = digits[i]-10;
		}else{
			break;
		}
	}
	if(c == 1){
		digits.unshift(1);
	}
	return digits;
};