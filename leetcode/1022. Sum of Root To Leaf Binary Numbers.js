javascript; /**
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
var sumRootToLeaf = function (root) {
  // Helper function for DFS traversal
  const dfs = (node, currentSum) => {
    // Base case: if node is null, return 0
    if (!node) return 0;

    // Shift left by 1 (multiply by 2) and add the current node's value
    // Using bitwise operators: (currentSum << 1) | node.val
    currentSum = (currentSum << 1) | node.val;

    // If it is a leaf node, return the accumulated sum
    if (!node.left && !node.right) {
      return currentSum;
    }

    // Recursively traverse left and right subtrees and sum up their results
    return dfs(node.left, currentSum) + dfs(node.right, currentSum);
  };

  return dfs(root, 0);
};

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
var sumRootToLeaf = function (root) {
  let stack = [];
  let sum = 0;
  function traverse(node) {
    if (!node) {
      return;
    }

    stack.push(node.val);
    if (!node.left && !node.right) {
      // console.log('tack.join("")', stack.join(""))
      sum += parseInt(stack.join(""), 2);
      stack.pop();
      return sum;
    }
    traverse(node.left);
    traverse(node.right);
    stack.pop();
  }
  traverse(root);
  return sum;
};
