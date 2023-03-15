const isCompleteTree = (root) => {
  queue = [root];

  let isPrevElNull = false;
  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      isPrevElNull = true;
      continue;
    }
    if (isPrevElNull) return false;
    queue.push(node.left, node.right);
  }
  return true;
};
