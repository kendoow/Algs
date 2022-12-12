// если последний < первого -> 2 разных интервала
// иначе 1 интервал

const merge = (intervals) => {
    if (intervals.length < 2) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const newIntervals = [];
    let prevInterval = intervals[0];
    
    for (let i = 1; i < intervals.length; i++) {
        const [prevFrom, prevTo] = prevInterval;
        const [from, to] = intervals[i];
        
        if (prevTo < from) {
            newIntervals.push(prevInterval);
            prevInterval = [from, to];
        } else {
            prevInterval = [prevFrom, Math.max(prevTo, to)];
        }
    }
    
    newIntervals.push(prevInterval);
    
    return newIntervals;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
