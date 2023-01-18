const maximumDifference = (nums) => {
  let min = Infinity;
  let diff = -1;
  for (i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    diff = Math.max(diff, nums[i] - min);
  }
  return diff == 0 ? -1 : diff;
};

console.log(maximumDifference([1, 5, 2, 10]));
