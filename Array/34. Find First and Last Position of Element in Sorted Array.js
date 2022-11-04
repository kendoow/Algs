const searchRange = (nums, target) => {
  const answer = [];
  if (!nums.includes(target)) return [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target && answer.length < 2) {
      answer.push(i);
    }
    if (nums[i] === target && answer.length >= 2) {
      answer.pop();
      answer.push(i);
    }
  }
  if (answer.length === 1) return [...answer, ...answer];
  return answer;
};

console.log(searchRange([3, 3, 3], 3));
