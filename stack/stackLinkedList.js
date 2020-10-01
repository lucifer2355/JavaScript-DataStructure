import { LinkedList } from "../linkList";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    this.list.toArray();
  }
}

const stack = new Stack();
stack.push("Cook dinner");
stack.push("Wash the dinner");
stack.push("Buy ingredients");

console.log(stack.toArray());

console.log(stack.pop());

console.log(stack.toArray());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.toArray());
