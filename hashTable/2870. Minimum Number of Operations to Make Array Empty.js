/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const hash = {}
    let res = 0;
    for (const el of nums) {
        hash[el] = (hash[el] || 0) + 1
    }

    for (const val of Object.values(hash)) {
        if (val === 1) {
            res = -1;
            return res;
        }

        res += Math.ceil(val / 3);
    }

    return res;
};