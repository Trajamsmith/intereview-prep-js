class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }

  // Seems like a good solution, but
  // doesn't actually work -- you can't
  // just check against the parent
  checkIfBstRecursive(node = this) {
    if (!node.left && !node.right) {
      return true;
    }
    if (node.left && node.left.value > node.value) {
      return false;
    }
    if (node.right && node.right.value < node.value) {
      return false;
    }

    let left = true,
      right = true;
    if (node.left) left = this.checkIfBstRecursive(node.left);
    if (node.right) right = this.checkIfBstRecursive(node.right);
    return left && right;
  }

  // Why don't we just do an in-order
  // traversal and see if any node is
  // less than the previous node
  checkIfBstInOrder() {
    const nodeVals = [];
    let isBST = true;

    // In-order traversal
    const traverse = node => {
      if (!node) {
        return;
      }

      if (node.left) traverse(node.left);
      nodeVals.push(node.value);

      // Compare the node values in the
      // in-order traversal--if any value is
      // less than the one preceding it, then
      // we know it's not a BST
      const lastIndex = nodeVals.length - 1;
      if (
        nodeVals[lastIndex - 1] < nodeVals[lastIndex - 2] ||
        nodeVals[lastIndex] < nodeVals[lastIndex - 1]
      ) {
        isBST = false;
      }

      if (node.right) traverse(node.right);
    };

    traverse(this);
    return isBST;
  }
}

const bst = new BinaryTreeNode(3);
bst.insertLeft(2);
bst.insertRight(5);
bst.left.insertLeft(1);
bst.left.insertRight(4);
// bst.left.left.insertRight(5);
// Note that this is wrong
console.log(bst.checkIfBstRecursive());
// But this is correct
console.log(bst.checkIfBstInOrder());
