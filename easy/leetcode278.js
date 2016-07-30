/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var low = 1;
        var high = n;
        var medium ;
        while(low <= high){

            medium = low + Math.floor((high-low)/2);
            console.log('low='+low+',hight='+high+',medium='+medium);
            if(isBadVersion(medium)){
                high = medium -1;
            }else{
                low = medium + 1;
            }
        }
        return high+1;
    };
};