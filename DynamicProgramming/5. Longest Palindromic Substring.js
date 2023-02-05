const longestPalindrome = (s) => {
  const n = s.length,
    memo = new Array(n).fill().map((v) => new Array(n));

  const dp = (i, j) => {
    if (i >= j) return true;
    if (memo[i][j] != undefined) return memo[i][j];
    memo[i][j] = s[i] != s[j] ? false : dp(i + 1, j - 1);
    return memo[i][j];
  };

  let length = s.length - 1;
  while (length > 0) {
    for (let i = 0; i + length < s.length; i++)
      if (dp(i, i + length)) return s.slice(i, i + length + 1);
    length--;
  }

  return s[0];
};
