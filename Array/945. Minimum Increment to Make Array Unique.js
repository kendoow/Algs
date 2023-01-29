const minIncrementForUnique = (nums) => {
  nums.sort((a, b) => a - b);

  let answer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
        nums[i] += 1
        answer++
    }
    else if (nums[i] < nums[i - 1]) {
        let diff = Math.abs(nums[i] - nums[i - 1])
        nums[i] += diff + 1
        answer += diff + 1
    }
}

  return answer;
};


console.log(minIncrementForUnique([3,2,1,2,1,7]))
