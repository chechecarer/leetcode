/**
 * @param {string} s
 * @return {boolean}
 */
var isAlph = function(c){
	
	if(c >='a' && c<='z' || c >='0' && c<='9'){
		return true;
	}else{
		return false;
	}
};

var isPalindrome = function(s){
	var str = s.toLowerCase();
	console.log(str);
	var i = 0;
	var j = str.length-1;
	while(i < j){
		if(isAlph(str[i])){
		  //  console.log(str[i]);
			if(isAlph(str[j])){
				if(str[i] === str[j]){
					i ++;
					j --;
				// 	console.log(str[i]);
				}else{
					return false;
				}
			}else{
				j --;
			}
		}else{
			i ++;
		}
	}
	return true;
};