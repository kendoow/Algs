const eraseOverlapIntervals = (intervals) => {
  if (intervals.length < 2) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1]);
  let counter = 0;
  let prevInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevInterval[1]) {
      counter++;
    } else {
      prevInterval = intervals[i];
    }
  }
  console.log(intervals)
  return counter;
};

console.log(
  eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])
);
