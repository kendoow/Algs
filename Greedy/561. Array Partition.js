const arrayPairSum = (nums) => {
    let ans = 0
    nums.sort((a,b) =>a - b)
    for(let i = 0; i< nums.length; i = i + 2){
        ans += nums[i]
    }
    return ans
};