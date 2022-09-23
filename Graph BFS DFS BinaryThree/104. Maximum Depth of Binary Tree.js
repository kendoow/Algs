const maxDepth = (root) => {
  function height(node) {
    if (!node) return 0;
    return Math.max(height(node.left), height(node.right)) + 1;
  }
  return height(root);
};
