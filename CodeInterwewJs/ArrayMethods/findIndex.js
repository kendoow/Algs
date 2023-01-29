
Array.prototype.findIndex1 = function (callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i])){
            return i
        }
    }
    return -1
}




const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex1(isLargeNumber));
// Expected output: 3