const answer = (data) => {
  const [n, arr] = data
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(/\s+/).map(Number));
  const sortedArr = arr.sort((a, b) => b - a);

  const withoutFirst = sortedArr.slice(1);

  const sum = withoutFirst.reduce((acc, curr) => (acc += curr));

  for (let i = 0; i < n; i++) {
    if (sortedArr[0] <= sum) {
      return sum + sortedArr[0];
    } else {
      return sortedArr[0] - sum;
    }
  }
};

const fs = require("fs");
const content = fs.readFileSync("input.txt", "utf8");
const result = answer(content);
fs.writeFileSync("output.txt", result + "");

// const array = [1, 5, 2, 1]

// console.log(answer(array))
