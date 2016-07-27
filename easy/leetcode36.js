var isValidColumn = function (column) {
	var obj = {};
	var i = 0;
	while(i<column.length){
		if(column[i] == '.'){
			continue;
		}
		if(column[i]>9){
			return false;
		}else{
			if(obj[column[i]]){
				return false;
			}else{
				obj[column[i]] = 1;
			}
		}
		i ++;
	}
	return true;
}
var isValidSudoku = function(board){
	var i, j, obj;
	while(i<9){
		if(!isValidColumn(board[i])){
			return false;
		}
	}
	for(j=0; j<9; j++){
		obj = {};
		for(i=0; i<9; i++){
			if(board[i][j] != '.'){
				if(board[i][j] > 9){
					return false;
				}else{
					if(obj[board[i][j]]){
						return false;
					}else{
						obj[board[i][j]] = 1;
					}
				}
			}
		}
	}
}