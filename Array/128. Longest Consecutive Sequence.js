const longestConsecutive = (nums) => {
  if (nums.length < 1) return 0;
  let max = 1;
  let maxIn = 1;
  const numsSorted = nums.sort((a, b) => a - b);
  console.log(numsSorted);
  for (let i = 0; i < nums.length; i++) {
    if (numsSorted[i + 1] - numsSorted[i] === 1) {
      maxIn++;
      max = Math.max(maxIn, max);
    } else if (numsSorted[i + 1] === numsSorted[i]) {
      continue;
    } else if (numsSorted[i + 1] - numsSorted[i] !== 1) {
      maxIn = 1;
    }
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
