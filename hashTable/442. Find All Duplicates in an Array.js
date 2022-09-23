const findDuplicates = (nums) => {
    const hash = {}
    const ans = []
    for (el of nums){
        hash[el] = (hash[el] || 0) + 1
    }
    for (key in hash){
        if(hash[key] > 1){
            ans.push(Number(key))
        }
    }
    return ans
};