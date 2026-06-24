class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      newNode.next = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = this.head;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      newNode.next = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    newNode.next = this.head;
    current.next = newNode;
    this.head = newNode;
  }

  delete(data) {
    if (this.head === null) return;

    let current = this.head;
    let prev = null;

    // If head needs deletion
    if (this.head.data === data) {
      // Single node case
      if (this.head.next === this.head) {
        this.head = null;
        return;
      }

      // Find last node
      while (current.next !== this.head) {
        current = current.next;
      }

      current.next = this.head.next;
      this.head = this.head.next;
      return;
    }

    do {
      prev = current;
      current = current.next;

      if ((current.data = data)) {
        prev.next = current.next;
        return;
      }
    } while (current !== this.head);
  }

  search(data) {
    if (this.head === null) return false;
    let current = this.head;

    do {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    } while (current !== this.head);
    return false;
  }

  print() {
    if (this.head === null) return false;

    let linkedListAsString = "";

    let current = this.head;

    do {
      linkedListAsString += current.data + " -> ";
      current = current.next;
    } while (current !== this.head);

    console.log(linkedListAsString + "(back to head)");
  }
}

const cll = new CircularLinkedList();

cll.append(10);
cll.append(20);
cll.append(30);

cll.prepend(5);

cll.print();
// 5 -> 10 -> 20 -> 30 -> (back to head)

console.log(cll.search(20)); // true

cll.delete(20);

cll.print();
// 5 -> 10 -> 30 -> (back to head)
