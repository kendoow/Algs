function zeroPlentiful(arr) {
    let count = 0;
    let len = 0;
    for (let e of arr) {
        if (e === 0) {
            ++len;
        }
        else if (len) {
            if (len < 4)
                return 0;
            else {
                len = 0;
                ++count;
            }
        }
    }
    if (len) {
        if (len < 4)
            return 0;
        else {
            ++count;
        }
    }
    return count;
}