// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const set = new Set();

  function traverse(node) {
    if (!node) {
      return false;
    }
    if (set.has(k - node.val)) {
      return true;
    } else {
      set.add(node.val);

      return traverse(node.left) || traverse(node.right);
    }
  }

  return traverse(root);
};
