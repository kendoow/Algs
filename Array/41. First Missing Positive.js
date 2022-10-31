const firstMissingPositive = (nums) => {
    let min = 1
    const sorted = nums.sort((a,b) => a - b)
    for(let i = 0; i < nums.length; i++){
        if(sorted[i]  === min ){
            min++
        }
    }
    return min
};