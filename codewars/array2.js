const maxProfit = function(prices) {
    const sum = 0
    for (let i = 1; i < prices.length; i++) {
        if(prices[i+1] - prices[i] > 0) {
            sum += prices[i] + 1 - 1
        } else {
            sum += 0
        }
        return sum
    }
};
maxProfit(1,2,3,4,5)