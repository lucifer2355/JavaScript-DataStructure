import { LinkedList } from "../linkList";

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    this.list.toArray();
  }
}
