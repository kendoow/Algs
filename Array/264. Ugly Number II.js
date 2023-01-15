const nthUglyNumber = function(n) {
    let perem = n
    let arr = []
    for(let i = 0 ; i< 1000000; i++){
        if(i % 2 === 0 || i % 3 === 0 || i % 5 ===0){
            arr.push(i)
            perem--
        }
        if(perem === 0){
            return arr[arr.length - 1]
        }
    }
   
};