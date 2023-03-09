let a, tot;
const minimumTime = (time, totalTrips) => {
    a = time,
    tot = totalTrips;
    let min = Math.min(...a);
    if (tot == 1) return min;
    return BinarySearch(0, 1e14);
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

const possible = (t) => { 
    let sum = 0;
    for (const x of a) sum += parseInt(t / x);
    return sum < tot;
};