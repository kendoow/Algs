const pickGifts = (gifts, k) => {


    for(let i = 0; i < k; i++){
        gifts.sort((a,b) => a - b)
        let newEl = Math.floor(Math.sqrt(gifts.pop()))
        gifts.push(newEl)
    }
    return gifts.reduce((a,b) => a + b)
};

console.log(pickGifts([25,64,9,4,100], 4))
console.log(pickGifts([1,1,1,1], 4))