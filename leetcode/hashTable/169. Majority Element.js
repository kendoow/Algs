const majorityElement = (nums) => {
    const hash = {};
    for(let num of nums){
        if(!hash[num]){
            hash[num] = 1
        } else {
            hash[num]++
        }
    }
    console.log(hash)
    let counter = 0
    let keyNumber = 0
    for(let key in hash){
         if(counter < hash[key]){
            console.log(counter, hash[key])
            counter = hash[key]
            keyNumber = key
        }
        
    }
    return keyNumber
};

console.log(majorityElement([1,1,2,3,1]))