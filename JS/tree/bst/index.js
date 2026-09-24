class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Insert a value
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Search a value
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // Find minimum node
  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // Delete
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (!node) return null;

    // Traverse tree
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node found

      // Case 1: No child
      if (node.left === null && node.right === null) {
        return null;
      }

      // Case 2: One child
      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      // Case 3: Two children

      let minNode = this.findMin(node.right); // Inorder successor = smallest value in right subtree
      node.value = minNode.value;
      node.right = this.deleteNode(node.right, minNode.value);
    }

    return node;
  }

  // Inorder Traversal (Sorted Order)
  inorder(node = this.root) {
    if (!node) return;

    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }

  bfs(node = this.root) {
    if (!node) {
      return;
    }
    const result = [];
    const queue = [this.root];
    let level = -1;

    while (queue.length > 0) {
      ++level;
      result[level] = [];
      const levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();

        result[level].push(currentNode.value);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }

    console.log("bfs", result);
    return result;
  }
}
const tree = new BST();

tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

//         50
//       /    \
//     30      70
//    /  \    /  \
//  20   40  60   80

console.log(tree.search(40)); // true
console.log(tree.search(100)); // false

tree.inorder();
// Output
// 20
// 30
// 40
// 50
// 60
// 70
// 80
tree.bfs();
