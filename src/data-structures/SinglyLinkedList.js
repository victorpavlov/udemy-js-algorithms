/**
 * Helper class to create a list node instance.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Singly Linked List class realization.
 * Uses helper Node class to create a list item.
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return;
    const head = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return head;
  }
  unshift(val) {
    const newNode = new Node(val);
    const oldHead = this.head;
    this.head = newNode;
    if (!this.length) {
      this.tail = this.head;
    } else {
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let lookedNode = this.head;
    for (let i = 0; i < index; i++) {
      lookedNode = lookedNode.next;
    }
    return lookedNode;
  }
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const next = prev.next;
    newNode.next = next;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null,
      next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// var list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
// list.push("New");
// list.insert(1, ':)');
// list.reverse();
