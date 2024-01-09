const leafSimilar = (root1, root2) => {
    const arr1 = []
    const arr2 = []
    const dfs = (node, arr) => {
        if (!node) {
            return
        }
        if (!node.left && !node.right) {
            arr.push(node.val)
            return
        }
        dfs(node.left, arr)
        dfs(node.right, arr)
    }
    dfs(root1, arr1)
    dfs(root2, arr2)
    return arr1.join('') === arr2.join('')
};

console.log(leafSimilar([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4], [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]))