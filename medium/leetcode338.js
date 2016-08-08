var countBits = function(num){
    var data;
    var result = [];
    var i, j;
    var count ;
    for(i=0; i<=num; i++){
        data = i.toString(2);
        count = 0;
        for(j=0; j<data.length; j++){
            if(data[j] === '1'){
                count ++;
            }
        }
        result.push(count);
    }
    return result;
}
