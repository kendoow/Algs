const maxCount = function (banned, n, maxSum) {
  let answ = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (!banned.includes(i) && sum + i <= maxSum) {
        answ++;
      sum += i;
     
    }
  }
  return answ;
};

console.log(maxCount([1, 6, 5], 5, 6)); // 2
console.log(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1)); // 0
console.log(maxCount([11], 7, 50)) // 7
// 5080
// 14
