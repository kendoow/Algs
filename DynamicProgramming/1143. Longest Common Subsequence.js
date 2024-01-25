/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // Lengths of the input strings
    const length1 = text1.length;
    const length2 = text2.length;

    // Create a 2D array to store the lengths of longest common subsequences
    // for all subproblems, initialized with zero
    const dp = Array.from({ length: length1 + 1 }, () => Array(length2 + 1).fill(0));

    // Iterate through the characters of both strings
    for (let i = 1; i <= length1; ++i) {
        for (let j = 1; j <= length2; ++j) {
            // Check if characters match
            if (text1[i - 1] === text2[j - 1]) {
                // If characters match, take diagonal value and add 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If characters do not match, take the maximum value from
                // the left (dp[i][j-1]) or above (dp[i-1][j])
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The bottom-right cell contains the length of the longest
    // common subsequence of text1 and text2
    return dp[length1][length2];
};

// Example usage:
const text1 = "abcde";
const text2 = "ace";
const result = longestCommonSubsequence(text1, text2);
console.log(result);