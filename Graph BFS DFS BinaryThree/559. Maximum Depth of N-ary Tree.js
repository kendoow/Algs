const maxDepth = (root) => {
    if (!root) return 0;
    let maximumDepth = 0;
    for (let node of root.children){
        maximumDepth = Math.max(maximumDepth, maxDepth(node));
    }
    return maximumDepth + 1;
};