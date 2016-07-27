/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
	var temp ;
	var i,j;
	if(numRows === 0){
		return result;
	}
	result.push([1]);
	for(i=1; i<numRows; i++){
		temp = []
		temp.push(1);
		for(j=1; j<i; j++){
			temp.push(result[i-1][j-1]+result[i-1][j]);
		}
		temp.push(1);
		result.push(temp);
	}
	return result;
};