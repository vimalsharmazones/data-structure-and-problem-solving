// Given two binary trees original and cloned and given a reference to a node target in the original tree.

// The cloned tree is a copy of the original tree.

// Return a reference to the same node in the cloned tree.

// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  // Base case: if we reach a null node, return null
  if (!original) return null;

  // Check if the current node in the original tree is the target reference
  if (original === target) {
    return cloned;
  }

  // Recursively search the left subtrees in parallel
  const leftResult = getTargetCopy(original.left, cloned.left, target);
  if (leftResult) return leftResult; // Early exit if found

  // Otherwise, recursively search the right subtrees
  return getTargetCopy(original.right, cloned.right, target);
};
