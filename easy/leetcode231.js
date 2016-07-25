var isPowerOfTwo = function(n){
	var num;
	num  = n % 2;
	while(!num && n>=2){
		n = n /2;
		num = n % 2;
	}
	if(num == 1 && n == 1){
		return true;
	}else{
		return false;
	}
}