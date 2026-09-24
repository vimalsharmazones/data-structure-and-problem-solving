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
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  function dfs(node, isLeft) {
    if (!node) return;

    // Check if the node is a leaf node
    if (!node.left && !node.right) {
      if (isLeft) {
        sum += node.val;
      }
      return;
    }

    // Traverse left and right subtrees
    dfs(node.left, true);
    dfs(node.right, false);
  }

  // Start DFS; the root itself is not a left child
  dfs(root, false);
  return sum;
};
