/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let arr = str.split(``);
    arr.reverse();
    reverseX = parseInt(arr.join(``));
    if (x == reverseX) return true;
    return false;
};