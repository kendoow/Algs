const removeDigit = function (number, digit) {
  let result = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let currentNumber =
        number.substr(0, i) + number.substr(i + 1, number.length + 1);
      if (!result || BigInt(currentNumber) - BigInt(result) > 0) {
        result = currentNumber;
      }
    }
  }
  return result;
};
