class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Get height
  getHeight(node) {
    return node ? node.height : 0;
  }

  // Get balance factor
  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // Right Rotation
  rightRotate(y) {
    // Before:            After:

    //     y                 x
    //    /                 / \
    //   x        =>      A    y
    //  / \                   / \
    // A  T2                 T2  C
    let x = y.left;
    let T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  // Left Rotation
  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  // Insert
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    // Normal BST insert
    if (!node) return new Node(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      return node; // duplicates not allowed
    }

    // Update height
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    // Check balance
    let balance = this.getBalance(node);

    // LL Case
    if (balance > 1 && value < node.left.value) {
      return this.rightRotate(node);
    }

    // RR Case
    if (balance < -1 && value > node.right.value) {
      return this.leftRotate(node);
    }

    // LR Case
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // RL Case
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  // Inorder traversal
  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }
}
