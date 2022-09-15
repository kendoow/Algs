const diStringMatch = (s) => {
  let idx = 0;
  let ans = [];
  let start = 0;
  let end = s.length;
  while (start < end) {
    if (s[idx] === "I") {
      ans.push(start);
      start++;
      idx++;
    } else if (s[idx] === "D") {
      ans.push(end);
      end--;
      idx++;
    }
  }
  ans.push(start);
  return ans;
};

console.log(diStringMatch("cxasca"));
