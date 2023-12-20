/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    prices.sort((a, b) => a - b)
    const a = money - (prices[0] + prices[1])
    return a >= 0 ? a : money
};

const prices = [1, 2, 2];
const money = 3;

console.log(buyChoco(prices, money));