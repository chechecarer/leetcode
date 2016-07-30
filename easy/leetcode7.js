var reverse = function(x){
	var s = Math.abs(x);
	var result = 0;
	var mo;
	while(s){
		mo = s%10;
		result = result*10 +mo;
		s = Math.floor(s/10);
	}
	if(x < 0){
		result = 0-result;
	}
	return result;
}