const sortArrayByParity = (nums) => {
    let ans = []
    for(el of nums){
        if(el % 2 === 0) {
            ans.push(el)
        }
    }
    for(el of nums){
        if(el % 2 !== 0) {
            ans.push(el)
        }
    }
    return ans
};