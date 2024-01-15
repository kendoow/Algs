var findWinners = function (matches) {
    let losses = new Array(100001).fill(0);

    for (const [winner, loser] of matches) {
        if (losses[winner] === 0) {
            losses[winner] = -1;
        }

        if (losses[loser] === -1) {
            losses[loser] = 1;
        } else {
            losses[loser]++;
        }
    }

    let zeroLoss = [];
    let oneLoss = [];

    for (let i = 1; i <= 100000; ++i) {
        if (losses[i] === -1) {
            zeroLoss.push(i);
        } else if (losses[i] === 1) {
            oneLoss.push(i);
        }
    }

    return [zeroLoss, oneLoss];
};
console.log(
    findWinners([
        [1, 3],
        [2, 3],
        [3, 6],
        [5, 6],
        [5, 7],
        [4, 5],
        [4, 8],
        [4, 9],
        [10, 4],
        [10, 9],
    ])
);
console.log(findWinners([[1, 100000]]));
