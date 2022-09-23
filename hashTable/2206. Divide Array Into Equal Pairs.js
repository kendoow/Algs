const divideArray = (nums) => {
    const hash = {}
    for (el of nums){
        hash[el] = (hash[el] || 0) + 1
    }
    for (key in hash){
        if(hash[key] % 2 !== 0){
            return false
        }
    }
    return true
};