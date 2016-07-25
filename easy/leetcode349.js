 var intersect = function(nums1, nums2){
        var s1 = {};
        var s2 = {};
        var i = 0;
        var result = [];
        nums1.forEach(function(num){
            var key = num;
            if(s1[key]){
                s1[key] ++;
            }else{
                s1[key] = 1;
            }
        });
        console.log(s1);
        nums2.forEach(function(num){
            var key = num;
            if(s2[key]){
                s2[key] ++;
            }else{
                s2[key] = 1;
            }
        });
        console.log(s2);
        var l;
        for (var key in s1){
            if(s2[key]){
                    result.push(parseInt(key));
            }
        }
        return result;
    }

    var numa1 = [1, 2, 2, 2, 1];
    var numa2 = [2, 2];

    console.log(intersect(numa1, numa2));