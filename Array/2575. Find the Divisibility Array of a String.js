const divisibilityArray = (word, m) => {
  const ans = [];

  let num = 0;
  let fullnum = 0;

  for (let i = 0; i < word.length; i++) {
    num = +(fullnum + word[i]);
    fullnum = num % m;
    ans.push(fullnum ? 0 : 1);
  }

  return ans;
};

console.log(divisibilityArray("998244353", 3));
