/**
 * @param {number} num
 * @return {number}
 */
const splitNum = function (num) {
  let array = ("" + num)
    .split("")
    .map(Number)
    .sort((a, b) => a - b);

  let num1 = "";
  let num2 = "";
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      num1 += String(array[i]);
    } else {
      num2 += String(array[i]);
    }
    console.log(num1);
  }
  return +(+num1 + +num2);
};

console.log(splitNum(4325));
