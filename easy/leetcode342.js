var isPowerOfFour = function(num){
	var n;
	if(num == 1)
		return false;
	n = num % 4;
	while(!n && num>=4){
		num = num /4;
		n = num % 4;
	}
	if(n==1 && num==1){
		return true;
	}
	else{
		return false;
	}

}