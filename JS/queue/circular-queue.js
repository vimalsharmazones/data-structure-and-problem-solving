class CircularQueue {
  constructor(size) {
    this.size = size;
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  // Check if queue is full
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  // Check if queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // Insert element
  enqueue(value) {
    if (this.isFull()) {
      return "Queue is full";
    }

    // First element
    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = value;
  }

  // Remove element
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    const removed = this.items[this.front];

    // Last element removed
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return removed;
  }

  // Get front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.front];
  }

  // Print queue
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let result = [];
    let i = this.front;

    while (true) {
      result.push(this.items[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.size;
    }

    console.log(result.join(" <- "));
  }
}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);

cq.print(); // 10 <- 20 <- 30 <- 40

console.log(cq.dequeue()); // 10
console.log(cq.dequeue()); // 20

cq.enqueue(50);
cq.enqueue(60);

cq.print(); // 30 <- 40 <- 50 <- 60
