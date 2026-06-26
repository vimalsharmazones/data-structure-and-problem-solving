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

  // Inorder Traversal (Sorted Order)
  inorder(node = this.root) {
    if (!node) return;

    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
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
