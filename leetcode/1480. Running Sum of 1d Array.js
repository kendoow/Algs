// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = (nums) => {
    const ans = []
    ans.push(nums[0])
    for(let i = 0; i< nums.length; i++){
        ans.push( nums[i+1] + ans[i]) 
    }
    return ans.slice(0,-1) 
};

console.log(runningSum([1,4,5]))