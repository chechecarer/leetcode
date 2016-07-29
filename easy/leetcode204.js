/**
 * @param {number} n
 * @return {number}
 */
 var isPrime = function(num){
	var len = Math.floor(Math.sqrt(num));
	if(num === 2){
		return true;
	}
	for(var i = 2; i<=len; i++){
		if(num%i ===0){
			return false;
		}
	}
	return true;
};

var countPrimes = function(n) {
    if(n <= 2){
		return 0;
	}
	if(n === 3){
		return 1;
	}
	if(n === 4){
		return 2;
	}
	var result = 2;
	for(var i=5; i<n; i=i+2){
		if(isPrime(i)){
		  //  console.log(i);
			result ++;
		}
	}
	return result;
};