/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinaryFirst = function(a, b){
	var an = parseInt(a, 2);
	var bn = parseInt(b, 2);
	var re = an +bn;
	var result = re.toString(2);
	return result;
}

var addBinary = function(a, b) {
   var obj = {
        '0': 0,
        '1': 1
    };
    var result = '';
    var c = 0;
    var j = a.length-1;
    var i = b.length-1;
    while(i>=0 &&j>=0){
        if(obj[a[j]]+obj[b[i]]+c >= 2){
            result = obj[a[j]]+obj[b[i]]+c-2+''+result;
            c = 1;
        }else{
            result = obj[a[j]]+obj[b[i]]+c+''+result;
            c = 0;
        }
        j --;
        i --;
    }
    if(i>=0){
        while(i>=0){
            if(obj[b[i]]+c >= 2){
                result = obj[b[i]]+c-2+''+result;
                c = 1;

            }else{
                result = obj[b[i]]+c +''+ result;
                c = 0;
            }
            i --;
        }
    }
    if(j>=0){
        while(j>=0){
            if(obj[a[j]]+c >= 2){
                result = obj[a[j]]+c-2+''+result;
                c = 1;

            }else{
                result = obj[a[j]]+c+''+result;
                c = 0;
            }
            j --;
        }
    }
    if(c == 1){
        result = '1'+ result;
    }
    return result;
};