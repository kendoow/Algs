function processOrders(orders) {
    orders.sort(({ executionTime: e1, executionTime: e2 }) => e1 - e2);
    let result = 0;

    const helper = (index = 0, time = 0, sum = 0) => {
        if (index === orders.length) {
            result = Math.max(result, sum);
            return;
        }

        const { expiredAt, executionTime } = orders[index];

        if (expiredAt >= time + executionTime) {
            helper(index + 1, time + executionTime, sum + 1);
        }

        helper(index + 1, time, sum);
    };

    helper();
    return result;
}















const first = [{ "index": "0000", "executionTime": 100, "expiredAt": 200 }, { "index": "0001", "executionTime": 1000, "expiredAt": 1250 }, { "index": "0002", "executionTime": 200, "expiredAt": 1300 }, { "index": "0003", "executionTime": 2000, "expiredAt": 3200 }]

const second = [{ "index": "0000", "executionTime": 1, "expiredAt": 2 }]

const third = [{ "index": "0000", "executionTime": 3, "expiredAt": 2 }, { "index": "0001", "executionTime": 4, "expiredAt": 3 }]

console.log(processOrders(first))
console.log(processOrders(second))
console.log(processOrders(third))