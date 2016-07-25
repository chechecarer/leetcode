
var reverseVowels = function(s){

	var vowel = {
		"a": 1,
		"e": 1,
		"i": 1,
		"o": 1,
		"u": 1,
		"A": 1,
		"E": 1,
		"I": 1,
		"O": 1,
		"U": 1
	};
	var result = [];
	var vos = [];
	var i;
	var l = s.length
	for(i=0; i<l; i++){
		if(vowel[s[i]]){
			vos.push(s[i]);
			result.push('undefined');
		}else{
			result.push(s[i]);
		}
	}


	var res = '';
	for(i=0; i<l; i++){
		if(result[i] == 'undefined'){
			result[i] = vos.pop();

		}
		res += result[i]
	}
	return res;
}