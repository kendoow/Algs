const majorityElement = (nums) => {
  const hash = {}; // el : counter
  let max = nums.length / 3;
  let ans = [];
  for (const el of nums) {
    console.log(el);
    hash[el] = (hash[el] || 0) + 1;
  }
  for (key in hash) {
    if (hash[key] > max) {
      ans.push(Number(key));
    } 
  }
  console.log(hash);
  return ans;
};

console.log(majorityElement([3, 2, 3]));
