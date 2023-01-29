Array.prototype.concat1 = function (args) {
    return [...this,...args]
}


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat1(array2);

console.log(array3)