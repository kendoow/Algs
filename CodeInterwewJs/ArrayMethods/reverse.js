Array.prototype.reverse1 = function () {
    const array = []
    for(let i = 0; i < this.length; i++){
        a[i] = this[(this.length - 1) - i]
    }
    return array
  };





const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse1();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]