var sortedSquares = function(nums) {
    for (let i =0; i< nums.length; i++){
        if(nums[i]< 0){
            nums[i] = Math.abs(nums[i])
        }
    }
    return nums.sort(function(a, b){return a - b}).map((i) => i*i)
};