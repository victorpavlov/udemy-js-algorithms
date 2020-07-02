/**
 * Helper class to create a list node instance.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


/**
 * Class realize stack.
 * Used Singly Linked List approach.
 * You can use native JavasCript <Array>. It depends of your needs.
 * arr.unshift() / arr.pop() is the most performance way.
 * Main thing is to remember principe FIFO.
 * Uses helper Node class to create a list item.
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
