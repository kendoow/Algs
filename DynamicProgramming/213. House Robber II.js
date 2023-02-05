const rob = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const helper = (nums) => {
    let rob1 = 0;
    let rob2 = 0;
    for (let el of nums) {
      newRob = Math.max(rob1 + el, rob2);
      rob1 = rob2;
      rob2 = newRob;
    }
    return rob2;
  };
  Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
};
