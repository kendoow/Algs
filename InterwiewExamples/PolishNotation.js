const calcInPolishNotation = (arr) => {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "+") {
      let sec = +stack.pop();
      let fir = +stack.pop();
      stack.push(sec + fir);
    } else if (arr[i] == "-") {
      let sec = +stack.pop();
      let fir = +stack.pop();
      stack.push(fir - sec);
    } else if (arr[i] == "*") {
      let sec = +stack.pop();
      let fir = +stack.pop();
      stack.push(sec * fir);
    } else if (arr[i] == "/") {
      let sec = +stack.pop();
      let fir = +stack.pop();
      stack.push(Math.trunc(fir / sec));
    } else stack.push(arr[i]);
  }
  return stack[0];
};

/**
 * @param {string[]} arr
 * @return {number}
 */
const evalRPN = (arr) => {};
// const calcInPolishNotation = function(array) {
//     const stackNumbers = [];
//     const collection = {
//         '+': (x,y) => x + y,
//         '-': (x,y) => x - y,
//         '*': (x,y) => x * y,
//         '/': (x,y) => x / y,
//     }

//     return array.reduce((acc, value) => {
//         if (value === +value) stackNumbers.push(value);
//         else {
//             const secondNumber = stackNumbers.pop();
//             const firstNumber = stackNumbers.pop();
//             const newValue = collection[value](firstNumber, secondNumber);
//             stackNumbers.push(newValue);
//         }

//         return stackNumbers.at(-1);
//     }, 0)
// }

console.log(calcInPolishNotation([1, 2, "+", 3, "+", 14, "+"])); //  20
console.log(calcInPolishNotation([1, 2, "+", 4, "*", 3, "+"])); // 15
console.log(calcInPolishNotation([7, 2, 3, "*", "-"])); // 1 / [7,2,3] -> [7,6] i =  -> [1]
// 1 2 3 * + => Это (2 * 3) + 1j
