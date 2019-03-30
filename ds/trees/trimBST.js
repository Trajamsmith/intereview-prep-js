import treeify from "treeify";

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Given a binary search tree and the lowest and highest
 * boundaries as L and R, trim the tree so that all its
 * elements lies in [L, R] (R >= L). You might need to change
 * the root of the tree, so the result should return the new
 * root of the trimmed binary search tree.
 */
var trimBST = function(root, L, R) {
  if (!root) return;
  if (root.val < L) {
    root = root.right;
    return trimBST(root, L, R);
  } else if (root.val > R) {
    root = root.left;
    return trimBST(root, L, R);
  }
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};

// TEST
let root = new TreeNode(3);
root.left = new TreeNode(0);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(1);
root = trimBST(root, 1, 2);

console.log(treeify.asTree(root, true));
