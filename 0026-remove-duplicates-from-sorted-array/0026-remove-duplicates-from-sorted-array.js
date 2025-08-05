/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueSet = new Set(nums);
    let uniqueArr = Array.from(uniqueSet);

    nums.length = 0;
    nums.push(...uniqueArr);
    
    return nums.length;
};