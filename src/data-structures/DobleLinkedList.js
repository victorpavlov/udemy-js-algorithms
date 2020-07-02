/**
 * Helper class to create a list node instance.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Double Linked List class realization.
 * Uses helper Node class to create a list item.
 */
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return;
    const current = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null;
    }
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) return;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    const oldHead = this.head;
    this.head = newNode;
    if (!this.length) {
      this.tail = this.head;
    } else {
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let lookedNode = this.head;
    const mediana = Math.floor(this.length / 2);

    if (index <= mediana) {
      for (let i = 0; i !== index; i++) {
        lookedNode = lookedNode.next;
      }
    } else {
      lookedNode = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
        lookedNode = lookedNode.prev;
      }
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
    newNode.prev = prev;
    prev.next = newNode;
    next.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.prev = null;
    removed.next = null;
    this.length--;
    return removed;
  }
}

// var list = new DoubleLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);
// list.push(7);
