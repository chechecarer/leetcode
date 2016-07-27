/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    if(x < 10 && x >= 0){
        return true;
    }
    var c = 10;
    var num = x;
    var len = 1;
    while(Math.floor(num/c) >= 10){
        c *= 10;
        len ++;
    }
    len ++;
    var i = 1;
    var f,l;
    while(i<=Math.floor(len/2)){
        f = Math.floor(x/c);
        l = x%10;
        x = Math.floor((x%c)/10);
        if(f !== l){
            break;
        }
        i ++;
        c /= 100;
    }

    if(i<=Math.floor(len/2)){
        return false;
    }
    return true;
};