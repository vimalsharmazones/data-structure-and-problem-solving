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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // Base Case: If the root is null or we found the matching value
  if (!root || root.val === val) {
    return root;
  }

  // If the target value is smaller, search the left subtree
  if (val < root.val) {
    return searchBST(root.left, val);
  }

  // If the target value is larger, search the right subtree
  return searchBST(root.right, val);
};
