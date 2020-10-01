class Queue {
  constructor() {
    this.items = [];
  }

  endueue(value) {
    this.items.unshift(value);
  }

  dequeue() {
    this.items.pop();
  }

  isEmpty() {
    this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const queue = new Queue();

queue.endueue("Max");
queue.endueue("Manu");
queue.endueue("Julie");

console.log(queue.toArray());
queue.dequeue();
console.log(queue.toArray());
queue.dequeue();
queue.dequeue();
console.log(queue.toArray());
