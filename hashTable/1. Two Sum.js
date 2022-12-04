const twoSum = function (nums, target) {
  const res = {};
  for (let i = 0; i <= nums.length; i++) {
    if (res[nums[i]] >= 0) {
      return [res[nums[i]], i];
    }

    res[target - nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
