var maxProfit = function(prices) {
    if(prices.length <= 1){
        return 0;
    }
    var min = 0;
    var max = 1;
    var result = prices[max] - prices[min];
    var i;
    for(i=1; i<prices.length; i++){
        if(prices[i] < prices[min] ){
            if(i>max){
                if(result < (prices[max]-prices[min])){
                    result = prices[max]-prices[min];
                }
            }
            min = i;
            if(i+1 != prices.length){
                max = i+1;
            }else{
                break;
            }
        }else{
            if(prices[i] > prices[max] ){
                max = i;
            }
        }
    }
    if(max > min){
        result = (prices[max]-prices[min])>result? (prices[max]-prices[min]):result;
    }
    console.log('max='+max+',min='+min);
    if(result < 0){
        result = 0;
    }
    return result;
};