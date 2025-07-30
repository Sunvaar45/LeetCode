/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let allNums = nums1.concat(nums2);
    let length = allNums.length;

    allNums.sort(function(a, b) {
        return a - b;
    });

    let result;
    let medianIndex = (length - 1) / 2;
    if (length % 2 == 1) {
        result = allNums[medianIndex];
    }
    else {
        let smallMedian = allNums[Math.floor(medianIndex)];
        let bigMedian = allNums[Math.ceil(medianIndex)];
        result = (smallMedian + bigMedian) / 2; 
    }
    return result;
};