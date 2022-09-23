const rangeSumBST = (root, low, high) => {
  let counter = 0;
  function helper(root) {
    if (!root) return null;
    if (root.val >= low && root.val <= high){
        counter += root.val;
    } 

    helper(root.left);
    helper(root.right);
  }

  helper(root);
  return counter;
};
