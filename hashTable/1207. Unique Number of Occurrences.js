/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const hash = {}
    for (el of arr) {
        hash[el] = (hash[el] || 0) + 1;
    }
    const values = Object.values(hash)
    if (values.length === new Set(values).size) {
        return true
    }
    return false
};

const arr = [1, 2, 2, 1, 1, 3]

