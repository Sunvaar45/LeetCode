/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // first solution - failed last test because of high time complexity
    // let result = 0
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i + 1; j <= s.length; j++) {
    //         let substring = s.slice(i, j);
    //         let arr = substring.split(``);
    //         let set = new Set(arr);
    //         if (result < set.size && set.size == arr.length) {
    //             result = set.size;
    //         }
    //     }
    // }
    // return result;

    // efficient solution
    let maxLength = 0;
    let left = 0;
    let charMap = new Map();

    // abcabcbb
    for (let right = 0; right < s.length; right++) {

        // move left pointer when found duplicate
        if (charMap.has(s[right]) == true && charMap.get(s[right]) >= left) {
            left = charMap.get(s[right]) + 1;
        }

        charMap.set(s[right], right);
        // a, 0
        // b, 1
        // c, 2
        // a, 3 - move left pointer to 1, maxLength still 3

        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};