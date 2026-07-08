// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let paths = [];
  let currentPath = [];

  function traverse(node) {
    if (!node) {
      return;
    }

    currentPath.push(node.val);
    traverse(node.left);

    traverse(node.right);

    if (!node.left && !node.right) {
      const pString = currentPath.join("->");
      console.log("pString", pString);
      paths.push(pString);
    }
    currentPath.pop();
  }
  traverse(root);
  return paths;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *     }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];

  // Helper function for Depth-First Search
  function dfs(node, currentPath) {
    if (!node) return;

    // Append the current node's value to the path string
    if (currentPath === "") {
      currentPath += node.val;
    } else {
      currentPath += "->" + node.val;
    }

    // If it's a leaf node, push the final path to our results array
    if (!node.left && !node.right) {
      paths.push(currentPath);
      return;
    }

    // Continue exploring down both children
    dfs(node.left, currentPath);
    dfs(node.right, currentPath);
  }

  dfs(root, "");
  return paths;
};
