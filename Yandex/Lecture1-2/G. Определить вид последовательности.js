function getSequenceType(data) {
    let sequence = data.toString().trim().split('\n').map(Number);
    let type, previous;

    for (let current of sequence) {
        if (current === -2e9) break;
        [previous, type] = checkNextElement(current, previous, type);
    }

    return type;
}

function checkNextElement(current, previous, type) {
    if (previous === undefined);

    else if (type === undefined) {
        if (current < previous) type = 'DESCENDING';
        else if (current === previous) type = 'CONSTANT';
        else type = 'ASCENDING';

    } else if (type === 'CONSTANT') {
        if (current < previous) type = 'WEAKLY DESCENDING';
        else if (current > previous) type = 'WEAKLY ASCENDING';

    } else if (type === 'ASCENDING') {
        if (current < previous) type = 'RANDOM';
        else if (current === previous) type = 'WEAKLY ASCENDING';

    } else if (type === 'WEAKLY ASCENDING') {
        if (current < previous) type = 'RANDOM';

    } else if (type === 'DESCENDING') {
        if (current === previous) type = 'WEAKLY DESCENDING';
        else if (current > previous) type = 'RANDOM';

    } else if (type === 'WEAKLY DESCENDING') {
        if (current > previous) type = 'RANDOM';
    }

    return [current, type];
}

process.stdin.on('data', data => {
    let result = getSequenceType(data);
    process.stdout.write(result);
    process.exit();
});