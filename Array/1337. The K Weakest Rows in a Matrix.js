/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    const sums = {}
    for (let i = 0; i < mat.length; i++) {
        sums[i] = mat[i].reduce((acc, curr) => acc + curr, 0)
    }
    const sortedKeys = Object.keys(sums).sort((a, b) => sums[a] - sums[b]);

    const answ = [];
    for (let i = 0; i < k; i++) {
        const index = sortedKeys[i]; // Берем первые k отсортированных ключей
        answ.push(Number(index)); // Преобразовываем ключ обратно в число
    }

    return answ;
};


const mat = [[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]]
const k = 3
console.log(kWeakestRows(mat, k))