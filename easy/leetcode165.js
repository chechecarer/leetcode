/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arrVersion1 = version1.split('.');
	var arrVersion2 = version2.split('.');
	arrVersion1 = arrVersion1.map(function(str){
		return parseInt(str);
	});
	arrVersion2 = arrVersion2.map(function(str){
		return parseInt(str);
	});
	var l1 = arrVersion1.length;
	var l2 = arrVersion2.length;
	var i = 0;
	while(i<l1 && i<l2){
		if(arrVersion1[i] === arrVersion2[i]){
			i ++;
		}else if(arrVersion1[i] > arrVersion2[i]){
			return 1;
		}else{
			return -1;
		}
	}
	if(i === l1 && i === l2){
		return 0;
	}else if(i ===l1 && i < l2){
		while(i<l2){
			if(arrVersion2[i] > 0){
				return -1;
			}
			i ++;
		}
		return 0;
	}else //if( i< l1 && i === l1)
	{
		while(i < l1){
			if(arrVersion1[i] > 0){
				return 1;
			}
			i ++;
		}
		return 0;
	}
};