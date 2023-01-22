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
 * @return {boolean}
 */




const isBalanced = (root) => {
    let balanced = true;
    
    const findHeight = (root) => {
        if (!root) return 0;

        let leftHeight = findHeight(root.left);
        let rightHeight = findHeight(root.right);
        let diff = Math.abs(leftHeight - rightHeight);

        if (diff > 1) balanced = false;
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    findHeight(root);
    return balanced;
};