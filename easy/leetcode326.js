var isPowerOfThree = function(n){
	var num;
	num = n % 3;
	while(!num && n>=3){
		n = n / 3;
		num = n % 3;
	}
	if(num==1 && n==1){
		return true;
	}else{
		return false;
	}
}