/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var num = [];
	var l1 = nums1.length;
	var l2 = nums2.length;
	var i, j;
	i=0, j=0;
	while(i<l1 && j <l2){
		if(nums1[i]<nums2[j]){
			num.push(nums1[i]);
			i ++;
		}else{
			num.push(nums2[j]);
			j ++;
		}
	}
	if(i<l1){
		while(i<l1){
			num.push(nums1[i]);
			i ++;
		}
	}
	if(j<l2){
		while(j<l2){
			num.push(nums2[j]);
			j ++;
		}
	}
	if((l1+l2)%2 === 0){
		return (num[(l1+l2)/2-1]+num[(l1+l2)/2])/2;
	}else{
		return (num[Math.ceil((l1+l2)/2)-1]);
	}
};