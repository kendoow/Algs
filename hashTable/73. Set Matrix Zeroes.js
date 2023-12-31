/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const idxROW = []
    const idxCOL = []

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) { // закидываю индексы которые надо занулить
                idxCOL.push(i)
                idxROW.push(j)
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (idxROW.includes(j) || idxCOL.includes(i)) {
                matrix[i][j] = 0
            }
        }
    }
};

matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

console.log(setZeroes(matrix))