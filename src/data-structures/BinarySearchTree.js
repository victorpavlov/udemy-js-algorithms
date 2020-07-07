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
 * Significant feature of BST is that each left node is less then parent,
 * and each right node is grater than parent.
 * Traverse methods included.
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
  }
  /**
   * Breadth First Search (BFS) tree traversal.
   * Better to use on the unbalanced tress, which have more linear structure.
   * Has a bigger memory capacity in case of the real branched tree,
   * since each left and right node on each tree level should be added
   * to the data heap.
   */
  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  /**
   * Depth First Search (DFS): PreOrder case.
   * In most cases better to use DFS tree traversal.
   * PreOrder variant useful when you want `export` tree structure,
   * so that it is easily reconstructed or copied.
   */
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  /**
   * Depth First Search (DFS): PostOrder case.
   */
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  /**
   * Depth First Search (DFS): InOrder case.
   * Used commonly for BST traversal.
   * BONUS: we'll have all values/nodes of the tree in their underlying order.
   */
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
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
