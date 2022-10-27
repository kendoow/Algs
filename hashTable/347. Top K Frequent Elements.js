const topKFrequent = (nums, k) => {
  const hash = {};
  const ans = [];
  for (el of nums) {
    hash[el] = (hash[el] || 0) + 1;
  }
  let sorted = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
  for (let i = 0; i < k; i++) {
    ans.push(sorted[i]);
  }
  return ans;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3]));
