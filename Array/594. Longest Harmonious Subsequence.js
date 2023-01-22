var findLHS = function (nums) {
  const hash = {};
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let el of nums) {
    hash[el] = (hash[el] || 0) + 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      max = Math.max(hash[nums[i]] + hash[nums[i - 1]], max);
    }
  }
  return max;
};


console.log(findLHS([1,3,2,2,5,2,3,7]))