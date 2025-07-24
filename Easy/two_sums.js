/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// @ts-check
"use strict";

var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {

        let secondValue = target - nums[i];
        if (nums.includes(secondValue))
        {
            return [i, nums.indexOf(secondValue)];
        }
    }
    return null;
};