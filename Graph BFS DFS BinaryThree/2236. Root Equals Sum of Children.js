const checkTree = (root) => {
    let sum = 0
    if(!root) return 0
    sum = root.left.val + root.right.val
    console.log(sum)
    if(root.val === sum){
        return true
    }
    return false
};