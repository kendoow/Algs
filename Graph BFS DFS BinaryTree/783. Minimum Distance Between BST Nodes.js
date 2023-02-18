const minDiffInBST = (root) => {
    let minValue = Infinity
    let prev;
    const dfs = (node) => {
        if (node == null) return;
        dfs(node.left);
        if (prev != null) minValue = Math.min(minValue, node.val - prev.val);
        prev = node;
        dfs(node.right);
    }
    dfs(root)

    return minValue
};