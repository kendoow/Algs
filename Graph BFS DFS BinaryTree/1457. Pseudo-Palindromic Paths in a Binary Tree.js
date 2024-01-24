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
var pseudoPalindromicPaths = function (root) {
    function isPseudoPalindromic(pathFrequency) {
        let oddCount = 0;
        for (let frequency of pathFrequency) {
            if (frequency % 2 === 1) {
                oddCount++;
            }
        }
        return oddCount <= 1;
    }

    function dfs(node, pathFrequency) {
        if (!node) return 0;

        pathFrequency[node.val]++;


        if (!node.left && !node.right) return isPseudoPalindromic(pathFrequency) ? 1 : 0;


        const leftCount = dfs(node.left, pathFrequency.slice());
        const rightCount = dfs(node.right, pathFrequency.slice());


        pathFrequency[node.val]--;


        return leftCount + rightCount;
    }

    const pathFrequency = Array(10).fill(0);
    return dfs(root, pathFrequency)
};