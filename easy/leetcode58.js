/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var sArr = s.split(' ');//由多个空格组成的字符串可以被分割策划那个多个元素是空格字符的数组
	if(sArr.length === 0){
		return 0;
	}
	console.log(sArr);
	var i = sArr.length-1;
	while(i>=0){
	    if(sArr[i].length !==0){
	        return sArr[i].length
	    }else{
	        i --;
	    }
	}
	return 0;
};