class LinkedList {
  constructor() {
    this.head = null; //! First element of the list
    this.tail = null; //! Lat element of the list
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  toArray() {
    const elements = [];
    let curNode = this.head;

    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("Hello there");
linkedList1.append("Dhulo");
linkedList1.append(true);
linkedList1.append(18.57);

console.log(linkedList1.toArray());
