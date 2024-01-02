/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const hash = {}
    const resultArray = []

    for (const el of nums) {
        hash[el] = (hash[el] || 0) + 1
    }
    while (Object.values(hash).length > 0) {
        let currArray = []
        for (let el of nums) {
            if (!currArray.includes(el) && hash[el]) {
                currArray.push(el)
                hash[el]--
                hash[el] === 0 && delete hash[el]
            }
        }
        resultArray.push(currArray)
    }

    return resultArray
};
const arr = [1, 3, 4, 1, 2, 3, 1]
console.log(findMatrix(arr))