const findErrorNums = (nums) => {
  const hash = {};
  const answ = [];
  let duplicate = null
  let notExist = null
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
    if (!hash[nums[i]]) {
      hash[nums[i]] = 0;
    } 
      hash[nums[i]] += 1;
    
    if (hash[nums[i]] > 1) {
      duplicate = nums[i]
    }
    if (!nums.includes(i + 1)) {
        notExist = i + 1;
    }
  }
  answ.push(duplicate)
  answ.push(notExist)
  return answ;
};
console.log(findErrorNums([1,2,2,4]))