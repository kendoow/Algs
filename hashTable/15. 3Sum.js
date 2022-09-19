const threeSum = function (nums) {
  const hash = {};
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    hash[i] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++){
        let diff = nums[i] + nums[j]
        console.log(hash[nums[i]])
        if(diff - hash[nums[i]] === 0){
            console.log(hash[nums[i]])
            ans.push([nums[i],nums[j],hash[nums[i]]])
        }
    }
  }
  console.log(hash)
  return ans
};

console.log(threeSum([-1,0,1,2,-1,-4]));
