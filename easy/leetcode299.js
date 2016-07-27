/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var len = secret.length ;
	var i=0;
	var obj1 = {};
	var obj2 = {};
	var b, c;
	b = 0;
	while(i < len){
		if(secret[i] !== guess[i]){
			if(obj1[secret[i]]){
				obj1[secret[i]] ++;
			}else{
				obj1[secret[i]] = 1;
			}

			if(obj2[guess[i]]){
				obj2[guess[i]] ++;
			}else{
				obj2[guess[i]] = 1;
			}
		}else{
			b ++;
		}
		i++
	}
	c = 0;
	for(var key in obj1){
		if(obj2[key]){
			c += obj1[key]<obj2[key] ? obj1[key]: obj2[key];
		}
	}
	return b+'A'+c+'B';
};