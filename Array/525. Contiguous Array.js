const findMaxLength = (nums) => {
  let hash = { 0: -1 };
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) count--;
    else count++;

    if (hash[count] != null) max = Math.max(max, i - hash[count]);
    else hash[count] = i;
  }
  return max;
};
console.log(findMaxLength([0, 1, 0, 1]));
