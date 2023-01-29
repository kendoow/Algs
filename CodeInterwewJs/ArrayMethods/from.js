
Array.prototype.from1 = function (arr, callbackFn) {
    const answ = []
    for(let i = 0; i < arr.length; i++){
        if(callbackFn ){
            if(callbackFn(arr[i])){
                return answ.push(arr[i])
            }
        } else {
            return arr.split('')
        }
        
    }
    return answ
}

console.log(Array.from1('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from1([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]