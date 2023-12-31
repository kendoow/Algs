/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    const hash = {}
    let maxAnsw = -1
    for (let i = 0; i < s.length; i++) {
        const el = s[i]
        console.log(hash[el], i, hash)
        hash[el] === undefined ? hash[el] = i : maxAnsw = Math.max(i - hash[el] - 1, maxAnsw)
    }
    return maxAnsw
};

s = "cbzxy"
console.log(maxLengthBetweenEqualCharacters(s))