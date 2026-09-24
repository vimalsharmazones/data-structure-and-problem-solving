class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to rear
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from front
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Get front element
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get queue size
  size() {
    return this.items.length;
  }

  // Print queue
  print() {
    console.log(this.items.join(" <- "));
  }
}
