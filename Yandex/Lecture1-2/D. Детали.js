function answer(data) {
    let [n, k, m] = data.toString().trim().split(' ').map(n => +n);
    let counter = 0;

    let add;
    let uslovno;
    do {
        add = Math.floor(n / k);
        uslovno = Math.floor(k / m) * add;
        counter += uslovno;
        n -= m * uslovno;
    } while (uslovno)


    return counter;
}

// console.log(answer(13, 5, 3));

process.stdin.on('data', data => {
    const result = answer(data);
    process.stdout.write(result + '');
    process.exit();
});
