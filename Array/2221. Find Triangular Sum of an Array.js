const triangularSum = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      nums[j] = nums[j] + nums[j + 1];
      if (nums[j] > 9) {
        nums[j] = nums[j] % 10;
      }
    }
  }

  return nums[0];
};

console.log(triangularSum([1, 2, 3, 4, 5]));
