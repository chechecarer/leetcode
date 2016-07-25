
 var isAnagram = function(s, t){
    var so = {};
    var to = {};
    var i,c;
    so.length = to.length = 0;

    for(i=0; i<s.length; i++){
        c = s[i]
        if(so[c]){
            so[c] ++;
        }else{
            so[c] = 1;
            so.length ++;
        }
    }

    for(i=0; i<t.length; i++){
        c = t[i]
        if(to[c]){
            to[c] ++;
        }else{
            to[c] = 1;
            to.length ++;
        }
    }

    if(so.length != to.length){
        return false;
    }else if(so.length === 0){
        return true;
    }else{
        for(var key in so){
            if(!to[key] || to[key]!==so[key]){
                return false;
            }
        }
        return true;
    }
}
