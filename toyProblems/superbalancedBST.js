import treeify from "treeify";

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

  // Naive recursive solution, requires
  // traversing the whole tree
  checkSubtreeBalanceR() {
    const depths = [];

    const traverse = (node, depth) => {
      if (!node.left && !node.right) {
        depths.push(depth);
      }

      if (node.left) traverse(node.left, depth + 1);
      if (node.right) traverse(node.right, depth + 1);
    };

    traverse(this, 0);
    return Math.max(...depths) - Math.min(...depths) < 1;
  }

  // Iterative solution
  checkSubtreeBalanceI() {
    // Values: [node, depth]
    const nodes = [[this, 0]];
    let minDepth = Infinity;
    let maxDepth = -Infinity;

    while (nodes.length) {
      // Get current node and depth
      let currVals = nodes.shift(),
        currNode = currVals[0],
        currDepth = currVals[1];

      // If leaf, update min/max depths
      if (!currNode.left && !currNode.right) {
        minDepth = Math.min(currDepth, minDepth);
        maxDepth = Math.max(currDepth, maxDepth);
      }

      // Add left node to node list
      if (currNode.left) {
        nodes.push([currNode.left, currDepth + 1]);
      }

      // Add right node to node list
      if (currNode.right) {
        nodes.push([currNode.right, currDepth + 1]);
      }
    }

    return maxDepth - minDepth < 1;
  }
}

const bst = new BinaryTreeNode(1);
bst.insertLeft(2);
bst.insertRight(3);
bst.left.insertLeft(4);
bst.left.insertRight(5);
// bst.left.left.insertLeft(6);
console.log(bst.checkSubtreeBalanceI());
console.log(treeify.asTree(bst, true));
