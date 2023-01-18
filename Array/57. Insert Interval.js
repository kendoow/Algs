const insert = (intervals, newInterval) => {
    const results = []
    
    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        
        if (newInterval[1] < start) { 
            results.push(newInterval)
            return results.concat(intervals.slice(i))
        } else if (newInterval[0] <= end) {
            newInterval = [Math.min(start, newInterval[0]), Math.max(end, newInterval[1])]
        } else results.push(intervals[i])
    }
    
    results.push(newInterval)
    return results
};

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];

console.log(insert(intervals, newInterval)); // -> [[1,5],[6,9]]
