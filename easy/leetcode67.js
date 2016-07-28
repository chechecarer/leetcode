var addBinary = function(a, b){
	// var na = parseInt(a, 2);
	// var nb = parseInt(b, 2);
	// var result = na+nb;
	// return result.toString(2);

	var obj = {
		'0': 0,
		'1': 1
	};
	var al = a.length;
	var bl = b.length;
	var result = '';
	var c = 0;
	var i,j;
    console.log('al='+al+',bl='+bl);
	if(al > bl){
		j = al-1;
		c = 0;
		for(i=bl-1 ; i>=0; i--){
		    console.log(a[j]);
		    console.log(b[i]);
		    console.log(obj[a[j]]+obj[b[i]]+c);
			if(obj[a[j]]+obj[b[i]]+c == 2){
				c = 1;
				a.splice(a.length-1,1);
				a += '0';
			}else{
				a[j] = obj[a[j]]+obj[b[i]]+c +'';
				c = 0;
			}
			j --;
		}
		if(c == 1){
			result = '1'+a;
		}
	}else{
		j = bl.length-1;
		c = 0;
		for(i=al-1 ; i>=0; i--){
			if(obj[b[j]]+obj[a[i]]+c == 2){
				c = 1;
				b[j] = '0';
			}else{
				b[j] = obj[b[j]]+obj[a[i]]+c+'';
				c = 0;
			}
			j --;
		}
		if(c == 1){
			result = '1'+b;
		}
	}
	return result;
}