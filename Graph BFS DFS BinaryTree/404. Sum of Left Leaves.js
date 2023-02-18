/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = (root) => {
  const stack = [root];

  let result = 0;

  while (stack.length > 0) {
   const node = nodesToTraverse.pop();

        if(node?.left) {
            if(!node.left.left && !node.left.right) {
                sum += node.left.val;
            } else {
                nodesToTraverse.push(node.left);
            }
        }

        if(node?.right) {
            nodesToTraverse.push(node.right);
        }
  }

  return result;
};
