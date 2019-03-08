import treeify from "treeify";

/**
 * This whole implementation doesn't
 * quite work, at the removal phase;
 * I think it's much easier wrt the
 * methods used in a heap to represent
 * the nodes as an array, rather than
 * a nested object -- try that next time
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class BinaryMaxHeap {
  constructor(initVal) {
    this.root = new Node(initVal);
    this.tail = this.root;
  }

  trickleUp(node) {
    if (node.parent === null || node.val < node.parent.val) {
      return;
    } else if (node.val > node.parent.val) {
      const tmp = node.val;
      node.val = node.parent.val;
      node.parent.val = tmp;
    }

    this.trickleUp(node.parent);
  }

  trickleDown(node) {
    let nodeToSwap;
    if (!node.right) {
      if (!node.left) {
        return;
      }
      if (node.val <= node.left.val) {
        nodeToSwap = node.left;
        const tmp = node.val;
        node.val = node.left.val;
        node.left.val = tmp;
      }
    } else {
      nodeToSwap = node.right.val > node.left.val ? node.right : node.left;
      const tmp = node.val;
      node.val = nodeToSwap.val;
      nodeToSwap.val = tmp;
    }
    // We swap values with the child node
    // with the larget value
    this.trickleDown(nodeToSwap);
  }

  getAllNodes() {
    // BFS
    const nodes = [this.root];
    let count = 0;
    let currNode = this.root;

    while (nodes[count]) {
      currNode = nodes[count];
      if (currNode.left) nodes.push(currNode.left);
      if (currNode.right) nodes.push(currNode.right);

      count++;
    }

    return nodes;
  }

  // THIS HAS TO BE DONE USING
  // A BREADTH-FIRST APPROACH --
  // depth-first will result in an
  // unbalanced tree
  insert(val) {
    const nodes = [this.root];
    let currNode = this.root;

    while (currNode.left !== null && currNode.right !== null) {
      currNode = nodes.shift();
      nodes.push(currNode.left);
      nodes.push(currNode.right);
    }

    if (!currNode.left) {
      currNode.left = new Node(val);
      currNode.left.parent = currNode;
      if (currNode.left.val > currNode.val) {
        this.trickleUp(currNode.left);
      }
    } else if (!currNode.right) {
      currNode.right = new Node(val);
      currNode.right.parent = currNode;
      if (currNode.right.val > currNode.val) {
        this.trickleUp(currNode.right);
      }
    }
  }

  // In a heap you _always remove
  // the root_, and nothing else
  remove() {
    // Save the root, to pop out
    const root = this.root;

    // Get the last-inserted node
    const allNodes = this.getAllNodes();
    let lastNode = allNodes.pop();

    // Replace the root with the
    // last inserted node, then
    // delete the last node
    this.root.val = lastNode.val;
    lastNode = null;

    // Trickle down the value of
    // the new root
    this.trickleDown(this.root);

    return root.val;
  }
}

const bmh = new BinaryMaxHeap(99);
bmh.insert(96);
bmh.insert(95);
bmh.insert(98);
bmh.insert(97);
bmh.insert(100);
bmh.remove();
console.log(treeify.asTree(bmh, true));
