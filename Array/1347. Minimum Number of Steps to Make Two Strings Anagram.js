/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const hashs = {}
    const hasht = {}
    let counter = 0
    for (const str of s) {
        hashs[str] = (hashs[str] || 0) + 1
    }

    for (const str of t) {
        hasht[str] = (hasht[str] || 0) + 1
    }

    for(let el of s){
        if(hasht[el] && hasht[el] > 0) {
            hasht[el]--
        } else {
            counter++
        }
    }

    return counter
};