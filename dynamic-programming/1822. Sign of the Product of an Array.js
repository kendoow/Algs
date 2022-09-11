const arraySign = (nums) => {
    const ans = nums.reduce((a,b) => a * b)
    if(ans > 0){
        return 1
    } else if(ans < 0) {
        return -1
    } else {
        return 0
    }
};

console.log(arraySign([1,-1]))