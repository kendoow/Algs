Array.prototype.map1 = function (callbackFn) {
    const arr = []
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i])){
            arr.push(callbackFn(this[i]))
        }
    }
    return arr
}

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map1(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]