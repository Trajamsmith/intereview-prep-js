class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const a = new GraphNode("a");
const b = new GraphNode("b");
const c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

const graph = [a, b, c];

/**
 * Given an undirected graph with maximum degree D,
 * find a graph coloring using at most D+1 colors.
 */
const getRand = arr => arr[Math.floor(Math.random() * arr.length)];

const colorGraph = graph => {
  const colors = ["blue", "green", "red", "yellow"];

  // We're doing this with BFS, but it actually
  // doesn't matter how you traverse the graph,
  // as long as you don't repeat
  const nodes = [graph[0]],
    seen = new Set();
  seen.add(graph[0].label);

  while (nodes.length) {
    let curr = nodes.shift(),
      availColors = colors.slice(0);

    // Standard BFS stuff
    for (let neighbor of curr.neighbors) {
      if (!seen.has(neighbor.label)) {
        seen.add(neighbor.label);
        nodes.push(neighbor);
      } else {
        // If we've seen the node before, then
        // it should be colored, in which case that
        // color is no longer available for the
        // current node
        const i = availColors.indexOf(neighbor.color);
        availColors.splice(i, 1);
      }
    }

    curr.color = getRand(availColors);
  }
};

colorGraph(graph);
console.log(graph);

/**
 * The above is a little silly since we already have
 * a list of nodes in the structure of the graph (an
 * array of nodes), so we don't have to do all this
 * BFS logic
 */
const colorGraphSimpler = graph => {
  const colors = ["blue", "green", "red", "yellow"];

  graph.forEach(node => {
    let availColors = colors.slice(0);

    for (let neighbor of node.neighbors) {
      // Remember that array search has a time
      // complexity of O(n), so using .indexOf()
      // is not usually an optimal choice
      const i = availColors.indexOf(neighbor.color);
      availColors.splice(i, 1);
    }

    node.color = getRand(availColors);
  });
};

colorGraphSimpler(graph);
console.log(graph);
