/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var i;
	var pObj = {};
	var strObj = {};
	for(i=0; i<pattern.length; i++){
		if(pObj['"'+pattern[i]+'"']){
			pObj['"'+pattern[i]+'"'].push(i);
		}else{
			pObj['"'+pattern[i]+'"'] = [];
			pObj['"'+pattern[i]+'"'].push(i);
		}
	}
	var strArr = str.split(' ');
	console.log(strArr);
	if(strArr.length !== pattern.length){
		return false;
	}
	for(i=0; i<strArr.length; i++){
		if(strObj['"'+strArr[i]+'"']){
			strObj['"'+strArr[i]+'"'].push(i);
		}else{
			strObj['"'+strArr[i]+'"'] = [];
			strObj['"'+strArr[i]+'"'].push(i);
		}
	}

	var pKeys = Object.keys(pObj);
	var sKeys = Object.keys(strObj);
	if(pKeys.length !== sKeys.length){
		return false;
	}
	var j;
	for(i=0; i<pKeys.length; i++){
		for(j=0; j<pObj[pKeys[i]].length; j++){
			if(pObj[pKeys[i]][j] !== strObj[sKeys[i]][j]){
				return false;
			}
		}
	}
	return true;
};