class Deque {
  constructor() {
    this.items = [];
  }

  // Add element at front
  addFront(element) {
    this.items.unshift(element);
  }

  // Add element at rear
  addRear(element) {
    this.items.push(element);
  }

  // Remove from front
  removeFront() {
    if (this.isEmpty()) {
      return "Deque is empty";
    }
    return this.items.shift();
  }

  // Remove from rear
  removeRear() {
    if (this.isEmpty()) {
      return "Deque is empty";
    }
    return this.items.pop();
  }

  // Get front element
  peekFront() {
    return this.isEmpty() ? null : this.items[0];
  }

  // Get rear element
  peekRear() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  // Check empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size
  size() {
    return this.items.length;
  }

  // Print
  print() {
    console.log(this.items.join(" <- -> "));
  }
}

const deque = new Deque();

deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
deque.addFront(1);

deque.print(); // 1 <- -> 5 <- -> 10 <- -> 20

console.log(deque.removeFront()); // 1
console.log(deque.removeRear()); // 20

deque.print(); // 5 <- -> 10
console.log(deque.peekFront()); // 5
console.log(deque.peekRear()); // 10
