var increasingBST = function (root) {
  // Create a dummy node to easily handle the head of our new skewed tree
  let dummy = new TreeNode(0);
  let prev = dummy;

  function inorder(node) {
    if (!node) return;

    // 1. Traverse left subtree
    inorder(node.left);

    // 2. Process current node
    node.left = null; // Disconnect left child as per problem constraints
    prev.right = node; // Link the previous node's right to current node
    prev = node; // Move the prev pointer forward

    // 3. Traverse right subtree
    inorder(node.right);
  }

  inorder(root);
  return dummy.right;
};
