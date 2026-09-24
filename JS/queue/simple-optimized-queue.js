class Queue {
  constructor() {
    this.items = {}; // it uses Hash Map
    this.frontIndex = 0;
    this.rearIndex = 0;
  }

  enqueue(element) {
    this.items[this.rearIndex] = element;
    this.rearIndex++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.rearIndex === this.frontIndex;
  }

  size() {
    return this.rearIndex - this.frontIndex;
  }

  print() {
    console.log(this.items);
  }
}
