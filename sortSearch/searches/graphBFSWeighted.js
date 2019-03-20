/**
 * IT TURNS OUT THAT PEOPLE DON'T USE THE TERM
 * BREADTH-FIRST-SEARCH WHEN CONSIDERING WEIGHTED
 * GRAPHS AND INSTEAD WHAT I CREATED HERE IS A KIND
 * OF NAIVE VERSION OF DJIKSTRA'S ALGORITHM, WITH
 * A LOT OF REDUNDANT CALCULATIONS
 */

// Directed, weighted graph
const graph = {
  G: [["R", 4], ["B", 1]],
  R: [["A", 2]],
  A: [["P", 2], ["S", 3]],
  P: [["H", 6]],
  H: [],
  B: [["S", 3], ["D", 1]],
  S: [["H", 4]],
  D: [["S", 1]]
};

// ────────────────────────────────────────────────────────────────────────────────
const bfs = (graph, origin) => {
  // We don't need a seen object
  // because the graph is directed,
  // but we do need a list of nodes
  // for the BFS: [edges, totalDistance]
  const nodes = [[graph[origin], 0]],
    distances = [];

  while (nodes.length) {
    const currNode = nodes.shift(),
      // Edges of current node
      edges = currNode[0],
      // Distance to current node from origin
      currDistance = currNode[1];
    console.log(currNode);

    // If you've reached the destination
    // (which has no further edges), log
    // the total distance to the distances array
    if (!edges.length) {
      distances.push(currDistance);
    }

    // Edges are: [destination, distance]
    edges.forEach(edge => {
      const destEdges = graph[edge[0]],
        totalDist = currDistance + edge[1];
      nodes.push([destEdges, totalDist]);
    });
  }

  return [`Minimum distances is: ${Math.min(...distances)}`, distances];
};

console.log(bfs(graph, "G"));

// ────────────────────────────────────────────────────────────────────────────────
/**
 * Sames as above, but store the paths as
 * well so we can trace the route back
 */
const bfsPath = (graph, origin) => {
  // [edgeList, totalDistance, traversedPath]
  const nodes = [[graph[origin], 0, [origin]]],
    paths = [];

  while (nodes.length) {
    const currNode = nodes.shift(),
      edges = currNode[0],
      currDistance = currNode[1],
      currPath = currNode[2];

    if (!edges.length) {
      paths.push(currDistance, currPath);
    }

    // Edges are: [destination, distance]
    edges.forEach(edge => {
      const destEdges = graph[edge[0]],
        totalDist = currDistance + edge[1],
        path = currPath.concat([edge[0]]);
      nodes.push([destEdges, totalDist, path]);
    });
  }

  return paths;
};

console.log(bfsPath(graph, "G"));
