/**
 * Helper class to create a list node instance.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Binary Search Tree class realization.
 * Uses helper Node class to create a list item.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let node = this.root;
    while (true) {
      if (node.value === value) return true;
      if (value > node.value) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return false;
  }
}

// let someTree = new BinarySearchTree();
// someTree.insert(10)
//     .insert(5)
//     .insert(13)
//     .insert(2)
//     .insert(7)
//     .insert(11)
//     .insert(16);
