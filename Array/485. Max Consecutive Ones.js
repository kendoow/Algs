var findMaxConsecutiveOnes = function(nums) {
    let max = 1
    let maxCurr = 1
    for(let i = 0; i < nums.length; i++){
        console.log(maxCurr, max)
        if(nums[i] === nums[i + 1] && nums[i] === 1){
            maxCurr++
            max = Math.max(maxCurr,max)
        } else {
            maxCurr = 1
            max = Math.max(maxCurr,max)
        }
    }
    return max
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))