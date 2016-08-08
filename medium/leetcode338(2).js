/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
   var result = [];
	var i;
	result.push(0);
	for(i=1; i<=num; i++){
		result[i] = result[i>>1]+i%2;
	}
	return result;
};