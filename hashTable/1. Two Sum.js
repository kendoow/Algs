const twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let razintsa = target - nums[i];
    console.log(hash[razintsa])
    if (hash[razintsa] && hash[razintsa] !== i) {
      return [i, hash[razintsa]];
    }
  }
  return []
};

console.log(twoSum([1, 3, 4, 2], 6));
