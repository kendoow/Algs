const removeElement = (nums, val) => {
  let arr = nums.filter((num) => num !== val);

  nums.length = 0;

  nums.push(...arr);

  return nums.length;
};
