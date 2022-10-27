const search = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if(nums.includes(target)){
        return nums[target] 
    } else{
        
    }
  }
  return -1
};

console.log(search([1,3], 1))