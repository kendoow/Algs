const longestSubarray = (nums) => {
  let left = 0;
  let maxLength = 0;
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeros++;
    if (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;    
        left++;
      } else left++;
    }
    maxLength = Math.max(maxLength, i - left);
  }
  return maxLength;
};

console.log(longestSubarray([1,1,1,0,1,1,0,1,0,0]))