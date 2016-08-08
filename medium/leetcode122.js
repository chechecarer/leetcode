/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var start;
	var result = 0;
	var state = 0;
	var i, temp;
	
	i=0;
	start = 0;
	while( i<prices.length-1 ){
		if(state === 0){
			if(prices[i] < prices[i+1]){
				start = i;
				temp = 0-prices[start];
				state = 1;
			}
		}else{
			if(prices[i] > prices[i+1]){
				temp += prices[i];
				result += temp;
				state = 0;
			}
		}
		i ++;
	}
	
	if(state === 1 && prices[start]<prices[prices.length-1]){
		temp += prices[prices.length-1];
		result += temp;
	}
	
	return result;
};