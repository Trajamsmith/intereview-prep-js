class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  moveLeft() {
    while (this.outStack.length) {
      this.inStack.push(this.outStack.pop());
    }
  }

  moveRight() {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
  }

  enqueue(val) {
    if (this.outStack.length) {
      this.moveLeft();
      this.inStack.push(val);
    } else {
      this.inStack.push(val);
    }
  }

  dequeue() {
    if (this.inStack.length) {
      this.moveRight();
      this.outStack.pop();
    } else {
      this.outStack.pop();
    }
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.enqueue(5);
q.dequeue();
q.enqueue(6);
console.log(q);
