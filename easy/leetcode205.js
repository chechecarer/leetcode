/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var arrS = [];
	var arrT = [];
	if(s.length !== t.length){
		return false;
	}
	if(s.length ===0 && t.length === 0){
	    return true;
	}
	var i;
	var sl,tl;
	sl = tl = 0;
	var ss, ts;
	ss = ts = 0;
	arrS[ss] = 1;
	arrT[ts] = 1;
	for(i=1; i<s.length; i++){
		if(s[i] == s[i-1]){
			arrS[ss] ++;
		}else{
			ss ++;
			arrS[ss] = 1;
		}
		if(t[i] == t[i-1]){
			arrT[ts] ++;
		}else{
			ts ++;
			arrT[ts] = 1;
		}
	}
	console.log(arrS);
	console.log(arrT);
	if(arrT.length !== arrS.length){
		return false;
	}
	for(i=0; i<arrS.length; i++){
		if(arrS[i] !== arrT[i]){
			break;
		}
	}
	if(i<arrS.length){
		return false;
	}
	return true;
};