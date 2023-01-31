
Array.prototype.forEach1 = function (callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i])){
            return i
        }   
    }
    return -1
}






const array1 = ['a', 'b', 'c'];

array1.forEach1(element => console.log(element));

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
  }
[2, 5, , 9].forEach(logArrayElements);
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"