// const distributeCandies = (candyType) => {
//     const hash = {}
//     const len = candyType.length / 2
//     for (let el of candyType){
//         if(!hash[el]){
//             hash[el] = 0
//         }
//         hash[el]++
//     }
//    const iterate = Object.values(hash).length

//    return len > iterate ? iterate : len
// };





var distributeCandies = function(candyType) {
    const amount = candyType.length / 2
    const set = new Set(candyType)
    let counter = 0
    let arr = Array.from(set)
    for(let i = 0; i < amount; i++){
        if(arr[i]){
            counter++
        }
    }
    return counter
};

console.log(distributeCandies([1,1,2,2,3,3]))