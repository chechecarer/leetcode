/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var i,j;
	var pre = '';
  
    var len = strs.length;
	  if(len === 0){
        return pre;
    }
	for(i=0; i<strs[0].length; i++){
		for(j=1; j<strs.length; j++){
			if(strs[j][i] !== strs[0][i]){
				break;
			}
		}
		if(j < strs.length){
		    break;
		}
		pre += strs[0][i];
	}
	return pre;
};