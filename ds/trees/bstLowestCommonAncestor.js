import BST from "./BST";

/**
 * Function to find the lowest common
 * ancestor (LCA) of two nodes in a BST
 */
const commonAncestor = (sub, val1, val2) => {
  if (val1 > sub.val && val2 > sub.val) {
    return commonAncestor(sub.right, val1, val2);
  } else if (val1 < sub.val && val2 < sub.val) {
    return commonAncestor(sub.left, val1, val2);
  } else {
    return sub.val;
  }
};

let bst = new BST(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(5);

console.log(commonAncestor(bst.root, 7, 5));
