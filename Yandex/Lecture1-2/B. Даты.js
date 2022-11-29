const answer = (x,y,z) => {
    x = parseInt(x)
    y = parseInt(y)
    if(x > 12 && y <= 12 || x <= 12 && y > 12){
        return 1
    } 
    return 0
}

const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const params = fileContent.toString().split(' ')

const result = answer(...params)

fs.writeFileSync("output.txt", result.toString())