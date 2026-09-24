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
var minDepth = function (root) {
  // If the tree is empty, the depth is 0
  if (!root) return 0;

  // Initialize a queue with the root node and a starting depth of 1
  let queue = [{ node: root, depth: 1 }];

  while (queue.length > 0) {
    let { node, depth } = queue.shift();

    // The first node with no children is our closest leaf node
    if (!node.left && !node.right) {
      return depth;
    }

    // Push children to the queue with incremented depth
    if (node.left) queue.push({ node: node.left, depth: depth + 1 });
    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
  }
};
