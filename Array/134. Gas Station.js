const canCompleteCircuit = (gas, cost) => {
  let sum = 0;
  let curTank = 0;
  let pos = 0;
  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    sum += diff;
    curTank += diff;
    if (curTank < 0) {
      curTank = 0;
      pos = i + 1;
    }
  }
  return sum < 0 ? -1 : pos;
};
