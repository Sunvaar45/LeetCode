/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = x.toString().split(``).reverse();
    if (arr[arr.length - 1] == `-`) {
        arr.unshift(`-`);
        arr.pop();
    }
    let reverseX = Number(arr.join(``));
    let min = (-2) ** 31;
    let max = 2 ** 31 - 1;
    if (reverseX >= min && reverseX <= max) {
        return reverseX;
    }
    return 0;
};