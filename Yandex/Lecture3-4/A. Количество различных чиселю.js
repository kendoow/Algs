const answer = (data) => {
    const arr = data.toString().trim().split(' ');
    const newLength = new Set(arr).size
    return newLength
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = answer(fileContent);

fs.writeFileSync('output.txt', result + '');