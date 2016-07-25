 var romanToInt = function(s){
        var romanNumber = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
        };
        var i;
        var result = 0;
        i = 0;
        while(i<s.length){
            switch(s[i]){
                case 'I':{
                    if(s[i+1] == 'V' || s[i+1] == 'X'){
                        result += romanNumber[s[i+1]]-romanNumber[s[i]];
                        i += 2;
                    }else{
                        result += romanNumber[s[i]];
                        i ++;
                    }
                    break;
                }
                case 'X':{
                    if(s[i+1] == 'L' || s[i+1] == 'C'){
                        result += romanNumber[s[i+1]]-romanNumber[s[i]];
                        i += 2;
                    }else{
                        result += romanNumber[s[i]];
                        i ++;
                    }
                    break;
                }
                case 'C':{
                    if(s[i+1] == 'D' || s[i+1] == 'M'){
                        result += romanNumber[s[i+1]]-romanNumber[s[i]];
                        i += 2;
                    }else{
                        result += romanNumber[s[i]];
                        i ++;
                    }
                    break;
                }
                case 'V':case 'L':case 'D':case 'M':{
                    result += romanNumber[s[i]];
                    i ++;
                    break;
                }
            }
        }
        return result;
    }