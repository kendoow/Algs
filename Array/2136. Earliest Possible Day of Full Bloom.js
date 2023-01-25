const earliestFullBloom = (plantTime, growTime) => {
  let times2Dementional = [];
  for (let i = 0; i < plantTime.length; i++)
    times2Dementional.push([plantTime[i], growTime[i]]);

  times2Dementional.sort((a, b) => b[1] - a[1]);

  // вида [plant, grow] + сорт
  console.log(times2Dementional);
  let t = 0;
  let bt = 0;   
  for (let i = 0; i < times2Dementional.length; i++) {
    t += times2Dementional[i][0];
    bt = Math.max(bt, t + times2Dementional[i][1]);
  }
  return bt;
};

console.log(earliestFullBloom([1, 4, 3], [2, 3, 1]));
