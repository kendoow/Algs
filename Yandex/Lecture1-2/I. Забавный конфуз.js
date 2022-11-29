function solution(data) {
  data = data.toString().trim().split("\n");
  const array = data[1].split(/\s+/).map(Number);

  let max = array[0];
  let min = array[1];

  for (let i = 0; i < array.length; ++i) {
    if (array[i] > max) max = array[i];
    else if (array[i] < min) min = array[i];
  }

  return max - min;
}

const fs = require("fs");
const content = fs.readFileSync("input.txt", "utf8");
const result = solution(content);
fs.writeFileSync("output.txt", result + "");
