const putMarbles = (weights, k) => {
    let slicedArray = []
    if( k <= weights.length){
        return 0
    }

    let max = 0
    let min = Infinity
    // формирую массив всех комбинаций подмассивов
    for(let i = 0; i < weights.length; i++){
        slicedArray[i] = weights.slice((i*k), (i*k) + k);
    }

    console.log(slicedArray)
};


const findSumOf = (arr) => {
    return arr[0] + arr[arr.length - 1] 
}

console.log(putMarbles([1,3,5,1],2))