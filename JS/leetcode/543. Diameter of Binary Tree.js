// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  function dfs(node) {
    // Base case: empty node contributes 0 to the depth
    if (!node) return 0;

    // Recursively find the max depth of left and right subtrees
    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);

    // Update the maximum diameter found so far
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    // Return the depth of the current subtree to the parent call
    return 1 + Math.max(leftDepth, rightDepth);
  }

  dfs(root);
  return maxDiameter;
};
