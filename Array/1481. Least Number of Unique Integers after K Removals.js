const findLeastNumOfUniqueInts = (arr, k) => {
    const hash = {}
    for (let el of arr){
        if(!hash[el]){
            hash[el] = 0
        }
        hash[el]++
    }
    const arrayOfValues = Object.values(arr).sort((a,b) => a - b)
    

};