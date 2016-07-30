/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str.length === 0){
        return 0;
    }
    var flag;
    var re = /\D/;
    if(str[0] === '-'){
        flag = false;
        if(str.length === 1){
            return 0;
        }else{
            str = str.substring(1);
        }
    }else if(str[0] === '+'){
        flag = true;
        if(str.length === 1){
            return 0;
        }else{
            str = str.substring(1);
        }
    }else{

        if(re.test(str)){
    		return 0;
    	}else{
    	    flag = true;
    	}
    }
    
    if(re.test(str)){
		return 0;
	}
	var i = parseInt(str);
	if(!flag && flag > 2147483648 ){
		return -2147483648;
	}else if(flag && flag > 2147483647){
		return 2147483647;
	}else{
		return flag? (i): (0-i);
	}
};