/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let result = 0
    let curr = 0
    let prev = 0
    for (const row of bank) {

        if (countOnes(row) !== 0) {
            prev = curr
            curr = countOnes(row)
            result += curr * prev
        }

        console.log(curr)
    }
    return result
};

const countOnes = (s) => {
    const res = s.split('').filter((el) => el === '1').length
    console.log(res)
    return res
}


bank = ["011001", "000000", "010100", "001000"]

console.log(numberOfBeams(bank))