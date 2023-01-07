const findMinArrowShots = (points) => {
  points.sort((a, b) => a[0] - b[0]);
  let prev = null,
    count = 0;

  for (let [start, end] of points) {
    if (prev == null || prev < start) {
      count++;
      prev = end;
    } else prev = Math.min(prev, end);
  }
  return count;
};

console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
);
