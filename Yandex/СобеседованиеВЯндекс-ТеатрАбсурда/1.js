// Даны два массива: [1, 2, 3, 2, 0] и [5, 1, 2, 7, 3, 2]
// Надо вернуть [1, 2, 2, 3] (порядок неважен)


const answ = (arr1,arr2) => {
    const answ = []
    for(el of arr1){
        if(arr2.includes(el)){
            answ.push(el)
        }
    }
    return answ
}


console.log(answ([1,2,3,4,7,8,55], [55,2,3,51,55]))