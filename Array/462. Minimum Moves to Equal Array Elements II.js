const minMoves2 = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  const mid = nums[Math.floor(sorted.length / 2)];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = mid - sorted[i];
    console.log(current)
    sum += Math.abs(current);
  }
  return sum;
};


console.log(minMoves2([1,2,3]))