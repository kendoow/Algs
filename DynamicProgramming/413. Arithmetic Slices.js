const threeOnly = (nums, i) => {
   
}

const numberOfArithmeticSlices = (nums) => {
    let answ = 0
    const dp = Array(nums.length).fill(0);
    for(let i = 2; i < nums.length; i++){
        if(nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]){
            dp[i] = 1 + dp[i - 1]
            answ += dp[i]
        }
    }
    return answ
};