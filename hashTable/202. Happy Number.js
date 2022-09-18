const isHappy = (n) => {
    const seen = new Set();
    while (n != 1) {
        let digitsAsChars = [... "" + n]
        let squares = digitsAsChars.map(num => num * num)
        n = squares.reduce((first, second) => first + second)
        if (seen.has(n)) {
            return false
        }
        seen.add(n)
        
    }
    return true;
};