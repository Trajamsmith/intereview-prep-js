/**
 * Given a complete binary tree, count the number of nodes.
 */
const countNodes = root => {
  let count = 0;

  //DFS
  const traverse = node => {
    if (!node) return;
    count++;
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return count;
};

//
// ─── TEST ───────────────────────────────────────────────────────────────────────
//
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);

console.log(countNodes(tree));
