class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Insert at end
  append(data) {
    const newNode = new SinglyLinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Insert at beginning
  prepend(data) {
    const newNode = new SinglyLinkedListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete a node by value
  delete(value) {
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next !== null && current.next.data !== value) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  // Search for a value
  search(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }

    console.log(result + "null");
  }
}
const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.append(30);

list.prepend(5);

list.print();
// 5 -> 10 -> 20 -> 30 -> null

console.log(list.search(20)); // true
console.log(list.search(100)); // false

list.delete(20);

list.print();
// 5 -> 10 -> 30 -> null
