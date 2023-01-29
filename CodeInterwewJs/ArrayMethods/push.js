Array.prototype.push1 = function () {
  this.splice.apply(
    this, 
    [this.length, 0] 
      .concat(
        Array.prototype.slice.apply(arguments) 
      ) 
  );
  return this.length;
};

const animals = ["pigs", "goats", "sheep"];

const count = animals.push1("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push1("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
