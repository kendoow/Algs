const wordBreak = (s, wordDict) => {
  const wordDictSet = new Set(wordDict);
  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] === true && wordDictSet.has(s.substring(j, i))) {
        dp[i] = true;
      }
    }
  } 
  return dp[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
