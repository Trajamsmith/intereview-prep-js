class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export default class BST {
  constructor(initVal) {
    this.root = new Node(initVal);
  }

  insert(val) {
    const traverse = node => {
      if (!node.left && val < node.val) {
        node.left = new Node(val);
        return;
      }
      if (!node.right && val > node.val) {
        node.right = new Node(val);
        return;
      }

      if (val < node.val) traverse(node.left);
      if (val > node.val) traverse(node.right);
    };

    traverse(this.root);
  }

  search(val) {
    let found = false;

    const traverse = node => {
      if ((node.val = val)) {
        found = true;
        return;
      }

      if (!node.left && !node.right) {
        return;
      }

      if (val < node) traverse(node.left);
      if (val > node) traverse(node.right);
    };

    traverse(this.root);
    return found;
  }
}

// let bst = new BST(8);
// bst.insert(3);
// bst.insert(10);
// bst.insert(1);
// bst.insert(6);
// bst.insert(14);
// console.log(bst);
// console.log(bst.search(6));
