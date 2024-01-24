/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    let max = 0;
    const backtrack = (start, str) => {
        if (str.length !== new Set(str).size) return
        max = Math.max(max, str.length)
        for (let i = start; i < arr.length; i++) {
            backtrack(i + 1, str + arr[i])
        }
    }
    backtrack(0, '')
    return max;
}