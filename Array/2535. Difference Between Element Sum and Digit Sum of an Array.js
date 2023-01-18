var differenceOfSum = function(nums) {
    let arrSum = nums.reduce((a,b) => a + b)
    let digitsSum = []
    for(let i = 0; i < nums.length; i++){
        digitsSum.push(...(""+nums[i]).split("").map(Number))
    }
    console.log(digitsSum)
    return Math.abs(arrSum - digitsSum.reduce((a,b) => a + b))
};


console.log(differenceOfSum([1,15,6,3]))