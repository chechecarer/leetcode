/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var get = function(rowIndex, record){
            if(record[rowIndex]){
                return record[rowIndex];
            }
            var result;
            if(rowIndex === 0){
                result = [1];
            }else{
                var i;
                result = [];
                result.push(1);
                i = 1;
                while(i < rowIndex){
                    var t1, t2;
                    if(record[rowIndex-1]){
                        t1 = record[rowIndex-1][i-1];
                        t2 = record[rowIndex-1][i];
                    }else{
                        t1 = get(rowIndex-1, record)[i-1];
                        t2 = get(rowIndex-1, record)[i];
                    }
                    result.push(t1 + t2);
                    i ++;
                }
                result.push(1);
            }
            record[rowIndex] = result;
            return result;
        };
        var getRow = function(rowIndex) {
            var record = {};
            get(rowIndex, record);
            // console.log(record);
            return record[rowIndex];
        };