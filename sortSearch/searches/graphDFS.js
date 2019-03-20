const graph = {
  G: ["R", "B"],
  R: ["G", "A"],
  A: ["R", "P", "S"],
  P: ["A", "H"],
  H: ["P", "S"],
  B: ["G", "F", "D"],
  S: ["A", "H", "F"],
  F: ["B", "S", "D"],
  D: ["B", "F"]
};

const dfs = (graph, start, end) => {
  const seen = [];
  let output = [];

  const traverse = (node, path) => {
    // Base case, output path
    if (node === end) {
      output = path;
      return node;
    }

    // Add the item to the seen list
    seen.push(node);

    // Recurse across all children
    return graph[node].forEach(node => {
      // If we've found a path, don't keep searching
      if (output.length) return;

      // If we haven't seen adjacent node yet, keep going
      if (!seen.includes(node)) traverse(node, [...path, node]);
    });
  };

  traverse(start, [start]);
  return output;
};

console.log(dfs(graph, "G", "H"));
