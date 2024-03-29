const intervalIntersection = (firstList, secondList) => {
  let i = 0,
    j = 0;
  const res = [];

  while (i < firstList.length && j < secondList.length) {
    const start = Math.max(firstList[i][0], secondList[j][0]);
    const end = Math.min(firstList[i][1], secondList[j][1]);
    if (start <= end) res.push([start, end]);
    if (firstList[i][1] == end) i++;
    else j++;
  }

  return res;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);
