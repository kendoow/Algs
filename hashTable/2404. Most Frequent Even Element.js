const mostFrequentEven = (nums) => {
    const hash = {}
    let maxEl = 0
    let maxReps = 0
    for (el of nums){
        hash[el] = (hash[el] || 0) + 1;
    }

    for(key in hash){
        if(hash[key] > maxReps && key % 2 === 0){
            maxReps = Math.max(hash[key])
            maxEl = key
        }
    }

    console.log(hash)
    return maxEl !== 0 ? maxEl : -1
};

console.log(mostFrequentEven([0,0,0,0]))