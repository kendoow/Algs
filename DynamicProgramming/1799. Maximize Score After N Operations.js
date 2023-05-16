var maxScore = function(nums) {
    const memo = new Map(); // map <bitmap, score>

    const backtrack = (bitmap, op) => {
        if (memo.has(bitmap)) {
            return memo.get(bitmap);
        }

        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if ((bitmap >> i) & 1 === 1 || (bitmap >> j) & 1 === 1) {
                    continue;
                }

                const gcd = getGCD(nums[i], nums[j]);
                const rest = backtrack(bitmap | 1 << i | 1 << j, op + 1);
                const score = rest + gcd * op;

                if (max < score) {
                    max = score;
                }
            }
        }

        memo.set(bitmap, max);

        return max;
    }

    return backtrack(0, 1);
};

const getGCD = (x, y) => {
    if (y === 0) {
        return x;
    }

    return getGCD(y, x % y);
}