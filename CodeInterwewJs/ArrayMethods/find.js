
Array.prototype.find1 = function (callbackFn) {
    
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i])){
            return this[i]
        }
    }
    return -1
}


const array1 = [5, 12, 8, 130, 44];

const found = array1.find1(element => element > 10);

console.log(found);
// Expected output: 12