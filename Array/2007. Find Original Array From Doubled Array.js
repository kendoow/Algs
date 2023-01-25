const findOriginalArray = (changed) => {
    const arr = []
    const hash = {}
    changed.sort((a,b) => a - b)
    for(let el of changed){
        hash[el] = el * 2
    }

    for(let el of changed){
        if(changed.includes(hash[el])){
            arr.push(el)
        }
    }
    console.log(arr)
    return changed.length / 2 === arr.length ? arr : [] 
};

console.log(findOriginalArray([1,3,4,2,6,8]))