let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString()

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return newNode;
  }
  dequeue() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
  }
  getHead() {
    return this.head.value;
  }
  getSize() {
    return this.length;
  }
}

const list = new LinkedList();

for (let i = 1; i <= Number(input); i++) list.enqueue(i);

while (list.getSize() > 1) {
  list.dequeue();
  list.enqueue(list.getHead());
  list.dequeue();
}

console.log(list.getHead());
