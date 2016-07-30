/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n === 0){
		return '';
	}
	var value = [ '','A', 'B', 'C', 'D', 'E', 'F', 'G', 
		'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
		 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
	var num = n;
	var data ;
	var result = '';

	while(num){
		data = num %26;
		if(data === 0){
			result = 'Z'+result;
			num = num-26;
			num = num/26;
		}else{
			result = value[data]+''+result;
			num = Math.floor(num/26);
		}
	}	
	return result;
};