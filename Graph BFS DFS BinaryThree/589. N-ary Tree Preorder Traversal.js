const preorder = (root, output = []) => {
    if(!root) return output;

    output.push(root.val)
    // Repeat for all of the root's children
    for(const child of root.children) {
        preorder(child, output);
    }
    return output;
};