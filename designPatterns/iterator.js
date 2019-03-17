/**
 * Straightforward, think the STL iterators
 * in C++; lets us traverse an iterable object
 * step by stpe
 */
import LinkedList from "../ds/LinkedList";

// Iterator for the linked list we built
class Iterator {
  constructor(ll) {
    this.list = ll;
    this.pos = ll.head;
  }

  first() {
    this.pos = this.list.head;
    return this.list.head;
  }

  next() {
    if (this.pos.next) {
      this.pos = this.pos.next;
      return this.pos;
    } else {
      return new Error("You've reached the end of the list");
    }
  }
}

const ll = new LinkedList(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(4);

/**
 * Note that we don't have to know anything
 * at all about how LinkedList is implemented,
 * all we need to know is the interface of the
 * Iterator itself (which then encapsulates all
 * of the specific LinkedList logic)
 */
const iterator = new Iterator(ll);
console.log(iterator.first());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
