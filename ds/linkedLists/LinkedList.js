class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  search(targetVal) {
    let currNode = this.head;
    while (currNode) {
      if (currNode.val === targetVal) {
        return true;
      } else {
        currNode = currNode.next;
      }
    }
    return false;
  }

  addToHead(val) {
    let tmp = this.head;
    this.head = new Node(val);
    this.head.next = tmp;
    this.length++;
  }

  addToTail(val) {
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
    this.length++;
  }
}

export default LinkedList;
