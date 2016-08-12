var hasCommonLetter(str1, str2){
	var i;
	var obj = {};
	for(i=0; i<str1.length; i++){
		if(obj[str1[i]] === undefined){
			obj[str1[i]] = 1;
		}
	}

	for(i=0; i<str2.length; i++){
		if(str2[i] in obj){
			return true;
		}
	}
	return false;
}

var maxProduct = function(words){
	if(words.length < 2){
		return 0;
	}
	var first ;
	var second ;
	var l1 ;
	var l2 ;
	var i;
	words.sort(function(a, b){
		return a.length - b.length;
	})
	i = 2;
	first = 0;
	second = 1;
	while(i<words.length){
		if(hasCommonLetter())
	}
}