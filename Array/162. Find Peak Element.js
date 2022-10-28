const findPeakElement = (nums) => {
  let maxIdx = null;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      maxIdx = i;
      max = nums[i];
    }
  }
  return maxIdx;
};
