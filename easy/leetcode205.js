/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var arrS = {};
	var arrT = {};
	if(s.length !== t.length){
		return false;
	}
	if(s.length ===0 && t.length === 0){
	    return true;
	}
	var i;
	
	for(i=0; i<s.length; i++){
		if(arrS['"'+s[i]+'"']){
			arrS['"'+s[i]+'"'].push(i);
		}else{

			arrS['"'+s[i]+'"'] = [];
			arrS['"'+s[i]+'"'].push(i);
		}
		if(arrT['"'+t[i]+'"']){
			arrT['"'+t[i]+'"'].push(i);
		}else{

			arrT['"'+t[i]+'"'] = [];
			arrT['"'+t[i]+'"'].push(i);
		}
		if(arrT['"'+t[i]+'"'].length != arrS['"'+s[i]+'"'].length){
		    return false;
		}
	}
	
	var sKeys = Object.keys(arrS);
	var tKeys = Object.keys(arrT);
	if(sKeys.length != tKeys.length){
		return false;
	}
	var j;
	for(i=0; i<sKeys.length; i++){
		if(arrS[sKeys[i]].length !== arrT[tKeys[i]].length){
			return false;
		}else{
			for(j=0; j<arrS[sKeys[i]].length; j++){
				if(arrS[sKeys[i]][j] !== arrT[tKeys[i]][j]){
					return false;
				}
			}
		}
	}
	return true;
};