var maximumTastiness = function (price, k) {
  price.sort((a, b) => a - b);
  let answ = Infinity;
  for (let i = 1; i < price.length; i++) {
    if (answ > price[i] - price[i - 1]) {
      answ = price[i] - price[i - 1];
    }
  }
  return answ;
};

console.log(maximumTastiness([13, 5, 1, 8, 21, 2]));
