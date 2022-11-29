// Given an integer array nums, return the length of the longest strictly increasing subsequence.

const lengthOfLIS = (nums) => {
    const dp = Array(nums.length - 1).fill(1)
    let longest = 1;
    for(let i = 1; i < nums.length - 1; i++){
        console.log(dp)
      for(let j = 0; j < nums.length - 1; j++){
        if(nums[j] < nums[i]){
            dp[i] = Math.max(dp[i], dp[j]+1);
            longest = Math.max(longest, dp[i]);
        }
      }
    }
    return longest
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))