function getVasilyPlace(data) {
    let results = data.toString().trim().split('\n')[1].split(' ').map(Number);
    let vasilyPlace = 0;

    let bestResultNumber = getBestResultNumber(results);
    let vasilyResult = getVasilyResult(results.slice(bestResultNumber + 1));

    if (vasilyResult !== -1) {
        vasilyPlace++;

        for (let i of results) {
            if (i > vasilyResult) vasilyPlace++;
        }
    }

    return vasilyPlace;
}

function getBestResultNumber(results) {
    let bestResult = results[0];
    let bestResultNumber = 0;

    for (let i in results) {
        if (results[i] > bestResult) {
            bestResult = results[i];
            bestResultNumber = i;
        }
    }

    return +bestResultNumber;
}

function getVasilyResult(results) {
    let vasilyResult = -1;

    for (let i in results.slice(0, -1)) {
        let distance = results[i];
    
        if (distance > vasilyResult
            && distance % 5 === 0
            && distance % 10 !== 0
            && distance > results[+i + 1]
        ) {
            vasilyResult = distance;
        }
    }

    return vasilyResult;
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = getVasilyPlace(fileContent);

fs.writeFileSync('output.txt', result.toString());