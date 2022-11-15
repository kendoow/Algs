const canJump = (nums) => {
  let target = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= target) {
      target = i;
    }
  }
  return target === 0 ? true : false;
};

console.log(canJump([3, 2, 1, 0, 4]));
