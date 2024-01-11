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

const findMax = (root, minv, maxv) => {
    if (root === null) {
        return Math.abs(minv - maxv);
    }
    minv = Math.min(minv, root.val);
    maxv = Math.max(maxv, root.val);

    const l = findMax(root.left, minv, maxv);
    const r = findMax(root.right, minv, maxv);

    return Math.max(l, r);
}
const maxAncestorDiff = function (root) {
    let minv = root.val;
    let maxv = root.val;
    return this.findMax(root, minv, maxv)
};

