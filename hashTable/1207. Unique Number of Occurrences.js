const uniqueOccurrences = (arr) => {
    const hash = {}
    for(el of arr){
        hash[el] = (hash[el] || 0) + 1;
    }
    const values = Object.values(hash)
    console.log(values, new Set(values))
    if(values.length === new Set(values).size){
        return true 
    }
    return false
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))