var maxProfit = function(prices){
	if(prices.length <= 1){
		return 0;
	}
	var min = prices[0];
	var max = prices[1];
	var i;
	for(i=1; i<prices.length; i++){
		if(prices[i] < min){
			min = prices[i];
			if(prices[i+1] == 'undefined'){
				return 0;
			}else{
				max = prices[i+1];
			}
		}else{
			
		}
	}
}