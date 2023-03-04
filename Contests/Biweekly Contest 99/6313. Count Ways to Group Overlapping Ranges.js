function countWays(ranges) {
    ranges.sort((a, b) => a[0] - b[0]);
    let ptr = -1;
    let group = 0;
    for (let i = 0; i < ranges.length; i++) {
        const [start, end] = ranges[i];
        if (ptr < start) {
            group++;
            ptr = end;
        } else {
            ptr = Math.max(ptr, end);
        }
    }
    return pow(2n, BigInt(group));
}

function pow(base, power) {
    let result = 1n;
    while (power > 0n) {
        if (power % 2n === 1n) {
            result = (result * base) % 1000000007n;
        }
        power = power / 2n;
        base = (base * base) % 1000000007n;
    }
    return result;
}


