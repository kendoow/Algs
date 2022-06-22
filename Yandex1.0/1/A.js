function conditioning(data) {
    const settings = data.toString().trim().split('\n');
    const [tRoom, tCond] = settings[0].trim().split(' ').map( n => +n);
    const mode = settings[1].trim();
    
    if (mode === 'fan') return tRoom;
    if (mode === 'heat' && tCond < tRoom) return tRoom;
    if (mode === 'freeze' && tCond > tRoom) return tRoom;

    return tCond;
}

process.stdin.on('data', data => {
    const result = conditioning(data);
    process.stdout.write(result + '');
    process.exit();
});