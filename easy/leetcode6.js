/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){
		return s;
	}
	var gn = numRows*2 -2;
	var mo;
	var obj = {};
	for(var i=0; i<s.length; i++){
		mo = i % gn;
		if(mo < numRows){
			if(obj[mo] === undefined){
				obj[mo] = '';
			}
			obj[mo] += s[i];
		}else{
			obj[gn-mo] += s[i];
		}
	}
// 	console.log(obj);
	var result = '';
	for(var key in obj){
		result += obj[key];
	}
	return result;
};