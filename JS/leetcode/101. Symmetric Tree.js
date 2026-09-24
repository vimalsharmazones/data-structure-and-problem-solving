// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  return isSameTree(root.right, root.left);
};

var isSameTree = (aNode, bNode) => {
  if (!aNode && !bNode) {
    return true;
  }

  if (!aNode || !bNode || aNode.val !== bNode.val) {
    return false;
  }

  return (
    isSameTree(aNode.left, bNode.right) && isSameTree(aNode.right, bNode.left)
  );
};
