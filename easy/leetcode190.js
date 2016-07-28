/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var nStr = n.toString(2);
    if(nStr.length < 32){
        var d = 32 - nStr.length;
        while(d){
            nStr = '0'+nStr;
            d --;
        }
    }
    var rnStr ='';
    var i = nStr.length-1;
    var j = 0;
    while(i>=0){
        rnStr += nStr[i];
        i --;
        j ++;
    }
    var result = parseInt(rnStr,2);
    return result;
};