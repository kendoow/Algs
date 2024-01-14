/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    const hash1 = {};
    const hash2 = {};

    for (let i = 0; i < word1.length; i++) {
        hash1[word1[i]] = hash1[word1[i]] ? hash1[word1[i]] + 1 : 1;
        hash2[word2[i]] = hash2[word2[i]] ? hash2[word2[i]] + 1 : 1;
    }

    const letters = Object.keys(hash1).sort().join("") === Object.keys(hash2).sort().join("");
    const values = Object.values(hash1).sort().join("") === Object.values(hash2).sort().join("");

    return letters && values;
};

const word1 = "abbzzca"
const word2 = "babzzcz"

console.log(closeStrings(word1, word2))