Array.prototype.slice1 = function (firstidx = 0, idx) {
    const arr = [];

    idx = idx || this.length - 1;
  
    for(let i = firstidx; i <= idx; i++) {
        arr.push(this[i]) ;
    }
    
    return arr;
};

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice1(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice1(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice1(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice1(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice1(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice1());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
