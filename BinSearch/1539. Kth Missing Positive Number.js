const findKthPositive = (arr, k) => {
    const arr1 = []
    for(let i = 1; i <arr.length + k + 1;i++){
        if(!arr.includes(i)){
            arr1.push(i)
        }
    }
    console.log(arr1)
    return arr1[k]
};

console.log(findKthPositive([1,2,3,4], 2))