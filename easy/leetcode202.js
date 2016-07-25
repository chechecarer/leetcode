var isHappy = function(n){
	var visited = {};
	var num = n;
	var sum = n;
	while(sum != 1){
		sum = 0;
		while(num){
			sum += Math.pow(num%10, 2);
			num = Math.floor(num/10);
		}
		if(visited[sum]){
			break;
		}else{
			visited[sum] = 1;
		}
		num = sum;
		
	}
	if(sum == 1){
		return true;
	}else{
		return false;
	}
	
}