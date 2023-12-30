/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const hash = {}
    for (const word of words) {
        for (const char of word) {
            hash[char] ? hash[char]++ : hash[char] = 1
        }
    }
    console.log(hash)
    for (const number of Object.values(hash)) {
        console.log(number)
        if (number % words.length !== 0) {
            return false
        }
    }
    return true
};
words = ["abc", "aabc", "bc"]
console.log(makeEqual(words))