let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [n, ...commands] = input;

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
    if (!this.head) return -1; // 비어 있으면 -1 반환
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    if (!this.head) this.tail = null; // 비어 있으면 tail도 초기화
    return value;
  }
  getHead() {
    return this.head ? this.head.value : -1;
  }
  getTail() {
    return this.tail ? this.tail.value : -1;
  }
  getSize() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0 ? 1 : 0;
  }
}
let answer = [];
let queue = new LinkedList();

for (let i = 0; i < n; i++) {
  const command = commands[i].trim().split(' ');
  const action = command[0];

  switch (action) {
    case 'push':
      queue.enqueue(command[1]);
      break;
    case 'pop':
      answer.push(queue.dequeue());
      break;
    case 'size':
      answer.push(queue.getSize());
      break;
    case 'empty':
      answer.push(queue.isEmpty());
      break;
    case 'front':
      answer.push(queue.getHead());
      break;
    case 'back':
      answer.push(queue.getTail());
      break;
  }
}

console.log(answer.join('\n'));