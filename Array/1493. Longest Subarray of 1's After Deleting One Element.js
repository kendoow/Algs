const longestSubarray = (nums) => {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[right] === 0) zeros++;
    if (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;
        left++;
      } else left++;
    }
    maxLength = Math.max(maxLength, right - left);
    right++;
  }
  return maxLength;
};
