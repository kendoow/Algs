const answer = (firstHeight, firstWidth, secondHeigth, secondWidth) => {
    const tables = [
        [firstHeight + secondHeigth, Math.max(firstWidth, secondWidth)],
        [firstHeight + secondWidth, Math.max(firstWidth, secondHeigth)],
        [firstWidth + secondHeigth, Math.max(secondWidth, firstHeight)],
        [firstWidth + secondWidth, Math.max(firstHeight, secondHeigth)],
      ]
      let minTable = [Infinity, Infinity]
      for (const [h, w] of tables) {
        if (h * w < minTable[0] * minTable[1]) {
            minTable = [h, w]
        }
      }
      return minTable.join(' ')
}

console.log(answer(10, 2, 2, 10))
// const fs = require('fs')

// let fileContent = fs.readFileSync("input.txt", "utf8");

// const params = fileContent.toString().split(' ')

// const result = answer(...params)

// fs.writeFileSync("output.txt", ...result.toString())