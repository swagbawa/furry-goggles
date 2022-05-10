import { Directory } from 'types/directory';

class Queue {
  item: Directory[];

  constructor() {
    this.item = [];
  }

  enqueue(path: Directory) {
    return this.item.push(path);
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('Underflow');
    return this.item.shift();
  }

  front() {
    if (this.isEmpty()) throw new Error('Array is Empty');
    return this.item[0];
  }

  isEmpty() {
    return this.item.length === 0;
  }
}

export default Queue;
