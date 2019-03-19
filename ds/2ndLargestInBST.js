import BST from "./BST";
import treeify from "treeify";

const get2ndLargest = (node, parentVal) => {
  // If there's only one value in BST
  if (!parentVal && !node.left && !node.right) {
    return "There's only one value in this tree";
  }

  // If the

  // Only apply if the root has any larget
  // values; here and below is a short solution
  // for a decently sized, balanced tree
  if (!node.right) {
    if (node.left) {
      return node.val;
    } else {
      return parentVal;
    }
  }

  return get2ndLargest(node.right, node.val);
};

let bst = new BST(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);

console.log(treeify.asTree(bst, true));
console.log(get2ndLargest(bst.root, null));
