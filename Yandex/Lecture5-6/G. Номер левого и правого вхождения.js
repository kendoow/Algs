const answer = (arr1,arr2) => {
    let leftidx = 0
    let rigthidx = arr1.length - 1
    let el2idx = 0
    const stack = []
    while(stack.length !== arr1.length * 2){
        if(arr2[el2idx] === arr1[leftidx]) {
            stack.push(arr1[leftidx])
            rigthidx = arr1.length - 1
        } 
        if(arr2[el2idx] === arr1[rigthidx]) {
            stack.push(arr1[rigthidx])
            leftidx = 0
        }
        rigthidx--
        leftidx++
    }
    return stack
}

console.log(answer([1, 2, 2, 3], [4, 3, 2, 1]))