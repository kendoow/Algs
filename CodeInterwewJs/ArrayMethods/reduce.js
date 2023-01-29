

Array.prototype.reduce1 = function (callback, initialValue = 0) {
    let answ = initialValue
    for(let i = 0; i< this.length; i++){
        answ = callback(answ, this[i])
    }
    return answ
  };



const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce1(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10