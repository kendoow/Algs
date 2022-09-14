const minCostClimbingStairs = (cost) => {
        let first = 0
        let second = 0
        for (let i = cost.length - 1; i >= 0; i--){
            let tmp = cost[i] + Math.min(first, second)
            second = first
            first = tmp;
        }
        return Math.min(first, second)
};
