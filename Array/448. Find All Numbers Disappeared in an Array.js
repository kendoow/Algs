const findDisappearedNumbers = (nums) => {
  let ans = [];
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (!sorted.includes(i + 1)) {
      ans.push(i + 1);
    }
  }
  return ans;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
