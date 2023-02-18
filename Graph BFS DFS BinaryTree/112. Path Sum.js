const hasPathSum = (root, targetSum) => {
    let output = false;
    const loop = (tree, value) => {
        if (tree?.val || tree?.val === 0) tree.val += value;
            
        if (!tree?.left && !tree?.right && tree?.val === targetSum) {
            output = true;
        }

        if (tree?.left) {
            loop(tree.left, tree.val);
        }
        if (tree?.right) {
            loop(tree.right, tree.val);
        }
    };

    loop(root, 0);
    
    return output;;
};