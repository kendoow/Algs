Array.prototype[Symbol.iterator].entries1 = function () {
    const arr = []
    for (let i = 0; i< this.length;i++){
        arr.push([i,this[i]])
    }
    return arr
}


const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries1();

console.log(iterator1);
// Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// Expected output: Array [1, "b"]