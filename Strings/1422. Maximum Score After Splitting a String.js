/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let max = -1
    for (let i = 1; i < s.length; i++) {
        max = Math.max(max, count(s.substring(0, i), '0') + count(s.substring(i, s.length), '1'))
    }
    return max
};

const count = (str, symb) => {
    let res = 0;
    for (let el of str) {
        if (el === symb) {
            res++
        }
    }
    return res
}
s = "011101"
// console.log(count(s.substring(0, 5), '0') + count(s.substring(5, s.length), '1'))
console.log(maxScore(s))