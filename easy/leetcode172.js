/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var result ;

		if(Math.floor(n/5) < 5){
			result = Math.floor(n/5);
		}else{
			result = Math.floor(n/5) + trailingZeroes(Math.floor(n/5));
		}

	return result;
};