// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

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
var averageOfLevels = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root]; // Initialize queue with the root node

  while (queue.length > 0) {
    const levelSize = queue.length; // Number of nodes at the current level
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift(); // Remove the front node
      levelSum += currentNode.val; // Add value to running sum

      // Push children of current node into the queue for the next level
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // Calculate the average and push to result array
    result.push(levelSum / levelSize);
  }

  return result;
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const sumsList = [];
  const itemsCountList = [];

  function traverse(node, level) {
    if (!node) {
      return 0;
    }
    sumsList[level] ??= 0;
    itemsCountList[level] ??= 0;
    sumsList[level] += node.val;
    ++itemsCountList[level];

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);

  const averagesList = sumsList.map(
    (sum, index) => sum / itemsCountList[index],
  );

  return averagesList;
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const sumsList = [];
  const itemsCountList = [];
  let level = -1;

  function traverse(node) {
    if (!node) {
      return 0;
    }

    ++level;
    sumsList[level] ??= 0;
    itemsCountList[level] ??= 0;
    sumsList[level] += node.val;
    ++itemsCountList[level];

    traverse(node.left);
    traverse(node.right);
    --level;
  }

  traverse(root);

  const averagesList = sumsList.map(
    (sum, index) => sum / itemsCountList[index],
  );

  return averagesList;
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let front = 0;

  while (front < queue.length) {
    const size = queue.length - front;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      const node = queue[front++];

      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(sum / size);
  }

  return result;
};
