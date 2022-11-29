

const solution = (code, interactor, checker) => { // код завершения задачи, вердикт интерактора,  вердикт чекера.
    code = parseInt(code)
    interactor = parseInt(interactor)
    checker = parseInt(checker)
    if(interactor === 0 && code !== 0 || interactor === 4 && code !== 0){
        return 3
    } else if (interactor === 0 && code === 0 || interactor === 1){
        return checker
    } else if(interactor === 4 && code === 0){
        return 4
    } else if (interactor === 6){
        return 0
    } else if (interactor === 7){
        return 1
    }
    return interactor
}

const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const params = fileContent.toString().split('\n')

const result = solution(...params)

fs.writeFileSync("output.txt", result.toString())