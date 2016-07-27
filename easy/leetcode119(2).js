var getRow = function (rowIndex) {
	var result = [];
	result.push(1);
	if(rowIndex === 0){
		return result;
	}
	result.push(1);
	if(rowIndex == 1){
		return result;
	}

	var i, j;
	for(i=2; i<rowIndex ; i++){
		result.push(1);
		for(j=i-1; j>0; j--){
			result[j] = result[j-1]+result[j-1];
		}
	}
	return result;
}