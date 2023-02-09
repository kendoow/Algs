const leafSimilar = (root1, root2) => {
    let leaf1 = [];
    let leaf2 = [];

    let dfs = function(node, leaf) {
        if (!node) return;
        if (!node.left && !node.right) {
            leaf.push(node.val);
            return;
        }
        dfs(node.left, leaf);
        dfs(node.right, leaf);
    }

    dfs(root1, leaf1)
    dfs(root2, leaf2);
    return leaf1.join('_') == leaf2.join('_')
};

console.log(leafSimilar([3,5,1,6,2,9,8,null,null,7,4],[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]))