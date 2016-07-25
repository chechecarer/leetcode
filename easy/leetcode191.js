var hammingWeight = function(n){
	var num = n;
	var result = 0;
	while(num){
		if(num%2){
			result ++;
		}
		num  = Math.floor(num/2)
	}
	return result;
}