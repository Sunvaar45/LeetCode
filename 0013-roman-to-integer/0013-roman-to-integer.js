/**
 * @param {string} s
 * @return {number}
 */

const romanMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
var romanToInt = function(s) {
    let arr = s.split(``);
    let numberArr = [];
    for (let char of arr) {
        char = romanMap[char];
        numberArr.push(char);
    }

    let prev = 0;
    let result = numberArr.reduce(function(sum, current) {
        if (prev >= current) {
            prev = current;
            return sum + current;
        }
        else {
            let newSum = sum + current - prev * 2;
            prev = current;
            return newSum;
        }
    }, 0);
    return result;
};