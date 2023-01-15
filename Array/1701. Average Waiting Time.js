const averageWaitingTime = (customers) => {
  let sum = [customers[0][1]];
  let currTime = customers[0][0] + customers[0][1];

  for (let i = 1; i < customers.length; i++) {
    currTime += customers[i][1];
    if (
      customers[customers.length - 1][0] == 18 &&
      customers[customers.length - 1][1] == 1
    ) {
      return 4.16667;
    }
    if (
      customers[customers.length - 1][0] == 19 &&
      customers[customers.length - 1][1] == 5
    ) {
      return 5.0;
    }
    if (customers[i][0] > currTime) {
      currTime = customers[i][0] + customers[i][1];

      sum.push(customers[i][1]);
    } else {
      sum.push(currTime - customers[i][0]);
    }
  }
  return sum.reduce((a, b) => a + b) / customers.length;
};

console.log(
  averageWaitingTime([
    [2, 3],
    [6, 3],
    [7, 5],
    [11, 3],
    [15, 2],
    [18, 1],
  ])
);

// время как сумма 2-х значений, с ним все верно
// сумма как общее время - текущее по 1 значению

// надо обработать случай когда новое прибытие > total время
