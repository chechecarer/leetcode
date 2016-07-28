/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var obj = {
		'(': 1, '{': 2, '[': 3,
		')': -1, '}': -2, ']': -3
	};
	var stack = [];
	var i;
	var l;
	for(i=0; i<s.length; i++){
		if(obj[s[i]] > 0){
			stack.push(obj[s[i]]);
		}else{
			if(stack.length === 0){
				return false;
			}
			l = stack.pop();
			if(l+obj[s[i]] !== 0){
				return false;
			}
		}
	}
	if(stack.length){
		return false;
	}
	return true;
};