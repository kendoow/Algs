const isSymmetric = (root) => {
  if (root == null) return true;

  const dfs = (left, right) => {
    if (!left && !right) return true;

    if (!left || !right || left.val != right.val) return false;

    return dfs(left.left, right.right) && dfs(left.right, right.left);
  };

  return dfs(root.left, root.right);
};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));
