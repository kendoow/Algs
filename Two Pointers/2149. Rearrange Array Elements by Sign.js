const rearrangeArray = (nums) => {
    const positive = []
    const negative = []
    const ans = []
    for(el of nums){
        if(el >= 0){
            positive.push(el)
        } else {
            negative.push(el)
        }
    }
    for(let i = 0; i < positive.length; i++){
        ans.push(positive[i])
        ans.push(negative[i])
    }
    return ans
};