const lengthOfLongestSubstring = (s) => {
  const hash = {};
  let maxLength = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let lastInOrder = s[i];
    if (hash[lastInOrder] === undefined) {
      hash[lastInOrder] = 0;
    }
    hash[lastInOrder]++;

    while (hash[lastInOrder] > 1) {
      let fistInOrder = s[start];
      hash[fistInOrder]--;
      start++;
    }
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};


