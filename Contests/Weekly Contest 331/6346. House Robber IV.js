const minCapability = (nums, k) => {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]

    let dp = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {

        dp[i] = Math.max(dp[i-2] + nums[i], dp[i - 1]);
    }
    console.log(dp)
    return Math.min(dp[nums.length - 1], dp[nums.length - 2])
};

console.log(minCapability([2,3,5,9], 2)) // 5
console.log(minCapability([2,7,9,3,1], 2)) // 2
