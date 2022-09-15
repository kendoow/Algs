const arithmeticTriplets = (nums, diff) => {
  let set = new Set();
  let count = 0;
  for (let i in nums) {
    set.add(nums[i]);
    if (set.has(nums[i] - diff) && set.has(nums[i] - diff - diff)) {
      count++;
    }
  }
  return count;
};
