class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  delete(data) {
    if (this.head === null) {
      return;
    }

    let current = this.head;

    while (current !== null && current.data !== data) {
      current = current.next;
    }

    if (current === this.head) {
      this.head = current.next;
      if (this.head) {
        this.head.prev = null;
      }
    }

    if (current === this.tail) {
      this.tail = current.prev;
      if (this.tail) {
        // for the case tail is itself null, 0 elements
        current.next = null;
      }
    }

    if (current.prev) {
      current.prev.next = current.next;
    }

    if (current.next) {
      current.next.prev = current.prev;
    }
  }

  search(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printForward() {
    let current = this.head;
    let linkedListAsString = "";
    while (current !== null) {
      linkedListAsString += current.data + " <-> ";
      current = current.next;
    }
    linkedListAsString += "null";
    console.log(linkedListAsString);
  }

  printBackward() {
    let current = this.tail;
    let linkedListAsString = "";
    while (current !== null) {
      linkedListAsString += current.data + " <-> ";
      current = current.prev;
    }
    linkedListAsString += "null";
    console.log(linkedListAsString);
  }
}

const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);

dll.prepend(5);

dll.printForward();
// 5 <-> 10 <-> 20 <-> 30 <-> null

dll.printBackward();
// 30 <-> 20 <-> 10 <-> 5 <-> null

console.log(dll.search(20)); // true

dll.delete(20);

dll.printForward();
// 5 <-> 10 <-> 30 <-> null
