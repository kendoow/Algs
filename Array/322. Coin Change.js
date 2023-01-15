const coinChange = (coins, amount) => {
  coins.sort((a, b) => b - a);
  let endSum = amount;
  let idx = 0;
  let sum = 0;
  let answ = 0;
  while (sum !== endSum) {
  
    if (amount >= coins[idx]) {
      amount -= coins[idx];
      sum += coins[idx];
      answ++;
    } else  if (amount < coins[idx] && amount - coins[coins.length - 1] < 0) {
        return -1;
    } else if (amount < coins[idx]) {
      idx++;
    }
   
  }
  return answ;
};

console.log(coinChange([186,419,83,408], 6249));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));
