const maxProduct = (nums) => {
    let res = Math.max(...nums)
    let currMin = 1 
    let currMax = 1
    console.log(res)
    for(let el of nums){
        if(el == 0){
            currMin = 1
            currMax = 1
            continue
        }
        let tmp = currMax * el
        currMax = Math.max(el * currMax, el * currMin,el)
        currMin = Math.min(tmp, el * currMin,el)
        res = Math.max(res, currMax)
        console.log(res)
    }
    return res
};



console.log(maxProduct([2,3,-2,4]))