const singleNumber = (nums) => {
    const hash = {}
    const arr = []
    for(let el of nums){
        hash[el] = (hash[el] | 0) + 1
    }
    for(let el of nums){
        if(hash[el] === 1){
            arr.push(el)
        }
    }
    return arr
};