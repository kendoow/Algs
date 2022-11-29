const answer = (data) => {
  const source = data.toString().trim().split("\n");

  let klavishy = source[1].split(" ");
  const poryadok = source[3].split(" ");

  const hash = {};
  const rezult = [];

  for (el of poryadok) {
    hash[el] = (hash[el] | 0) + 1;
  }

  for (let i = 0; i < klavishy.length; i++) {
    if (Object.values(hash)[i] > klavishy[i]) {
      rezult.push("YES");
    } else if (Object.values(hash)[i] <= klavishy[i]){
      rezult.push("NO");
    }
  }
  return rezult.join('\n');
};

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = answer(fileContent);

fs.writeFileSync('output.txt', result);
