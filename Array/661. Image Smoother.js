/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {

    const rows = img.length
    const cols = img[0].length

    const res = Array.from({ length: rows }, () => new Array(cols).fill(false))

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1]
    ]


    for (let r = 0; r < rows; r++) {

        for (let c = 0; c < cols; c++) {

            let curr = img[r][c]
            let count = 1
            let sum = curr

            for (const [dr, dc] of directions) {

                const nr = r + dr
                const nc = c + dc

                if (nr < 0 || nc < 0 || nr === rows || nc === cols) continue

                const valueArround = img[nr][nc]

                if (valueArround >= 0) {
                    count = count + 1
                    sum = sum + valueArround
                }

            }

            const val = Math.floor(sum / count)

            res[r][c] = val

        }

    }

    return res

}