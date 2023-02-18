const countLess = (nums, val) => {
  let res = 0;
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] >= val) {
      j--;
    } else {
      res += j - i;
      i++;
    }
  }
  return res;
};
const countFairPairs = (nums, lower, upper) => {
  nums.sort((a, b) => a - b);
  return countLess(nums, upper + 1) - countLess(nums, lower);
};
