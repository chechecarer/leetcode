var bulbSwitch = function(n){
	var i;
	var bulbState = [];
	for(i=0; i<n; i++){
		bulbState[i] = 1;
	}
	var j;
	for(i=0; i<n; i++){
		bulbState[i] = bulbState[i]===0? 1: 0;
		for(j=i+1; j<n; j++){
			if(j%i === 0){
				bulbState[j] = bulbState[j]===0? 1: 0;
			}
		}
	}
	var result = 0;
	for(i=0; i<n; i++){
		if(bulbState[i] === 1){
			result ++;
		}
	}
	return result;
}//time limited

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
   return Math.floor(Math.sqrt(n));
};