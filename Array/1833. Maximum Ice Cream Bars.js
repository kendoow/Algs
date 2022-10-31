const maxIceCream = (costs, coins) => {
  costs.sort((a, b) => a - b);
  let totalPrice = 0;
  for (let i = 0; i < costs.length; i++) {
    totalPrice += costs[i];
    if (totalPrice > coins) {
      return i;
    }
  }
  return costs.length;
};
