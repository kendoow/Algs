const ziping = (arr) => {
    arr.sort((a,b) => a - b)
    let result = []
    let start = null
    let end = null
    for(let i = 0; i < arr.length; i++){
        if (start === null) start = arr[i];
        if (arr[i] === arr[i + 1] - 1) end = arr[i + 1] 
        else {  
            result.push(start !== null && end ? `${start}-${end}` : start)
            end = null
            start = null
        }
    }
    return result
};

console.log(ziping([5,  4,  1,  2,  7,  11,  3,  8]))