/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    const arr = ['a', 'e', 'i', 'o', 'u']
    let right = 0
    let left = s.length - 1
    let counter1 = 0
    let counter2 = 0
    while (left > right) {
        console.log(s[left], s[right])
        if (arr.includes(s[left].toLowerCase())) {
            counter1++
        }
        if (arr.includes(s[right].toLowerCase())) {
            counter2++
        }
        left--
        right++
    }
    console.log(counter2, counter1)
    return counter1 === counter2
};