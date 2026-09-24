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
 * @return {number[]}
 */
var findMode = function (root) {
  let modes = [];
  let currentStreak = 0;
  let maxStreak = 0;
  let prevValue = null;

  function traverse(node) {
    if (!node) return;

    // 1. Traverse the left subtree
    traverse(node.left);

    // 2. Process the current node
    if (prevValue === node.val) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
      modes = [node.val]; // Reset modes with the new highest frequency value
    } else if (currentStreak === maxStreak) {
      modes.push(node.val); // Found another mode with the same maximum frequency
    }

    prevValue = node.val; // Track current value for the next comparison

    // 3. Traverse the right subtree
    traverse(node.right);
  }

  traverse(root);
  return modes;
};
