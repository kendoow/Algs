function answer(data) {
    const source = data.toString().trim().split('\n');
    let m = +source[1];
    let languages = new Set(source.slice(2, 2 + m));

    let allKnow = new Set(languages);
    let atLeastOneKnows = new Set(languages);

    for (let i = 2 + m; i < source.length;) {
        m = +source[i];
        languages = new Set(source.slice(i + 1, i + m + 1));

        allKnow = intersection(allKnow, languages);
        union(atLeastOneKnows, languages);

        i = i + m + 1;
    }

    return formatResult(allKnow, atLeastOneKnows);
}

function intersection(a, b) {
    let result = new Set();

    for (let i of a) {
        if (b.has(i)) {
            result.add(i);
        }
    }

    return result;
}

function union(a, b) {
    for (let i of b) {
        a.add(i);
    }

    return a;
}

function formatResult(a, b) {
    return [
        a.size,
        [...a].join('\n'),
        b.size,
        [...b].join('\n')
    ].join('\n');
}


const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = answer(fileContent);

fs.writeFileSync('output.txt', result);