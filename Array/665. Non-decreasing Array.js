const checkPossibility = (nums) => {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
        counter++;
      if (i - 2 < 0 || nums[i - 2] <= nums[i]) nums[i - 1] = nums[i];
      else nums[i] = nums[i - 1];
    }
  }
  return counter > 1 ? false : true;
};

console.log(checkPossibility([3, 4, 2, 3])); // -> false
