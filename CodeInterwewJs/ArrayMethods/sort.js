Array.prototype.sort1 = function (callbackFn) {
    const arr = []
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}



const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort1();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort1();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]