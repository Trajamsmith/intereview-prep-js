const graph = {
  book: [["lp", 5], ["poster", 0]],
  lp: [["guitar", 15], ["drums", 20]],
  poster: [["guitar", 30], ["drums", 35]],
  guitar: [["piano", 20]],
  drums: [["piano", 10]],
  piano: []
};

const djikstra = (graph, origin, destination) => {
  const table = {},
    // BFS queue
    nodes = ["book"];
  // Table entries:
  // { nodeName: [parentInShortestPath, shortestDistanceToNode], }
  table[origin] = [null, 0];

  while (nodes.length) {
    const parentNodeName = nodes.shift(),
      edges = graph[parentNodeName],
      distanceToParent = table[parentNodeName][1];

    edges.forEach(([nodeName, distanceFromParent]) => {
      // If we haven't seen this node yet
      // add it to the table with the current
      // parent and distance
      if (!table[nodeName]) {
        table[nodeName] = [
          parentNodeName,
          distanceToParent + distanceFromParent
        ];
        // Add node to BFS queue; only add
        // ones we haven't already seen to
        // prevent redundant calculations
        nodes.push(nodeName);
      } else {
        // Otherwise see if the distance from the
        // current node is less than what we have
        // already seen and recorded
        const [oldParent, oldDistance] = table[nodeName],
          currTotalDistance = distanceToParent + distanceFromParent;
        if (currTotalDistance < oldDistance) {
          table[nodeName] = [parentNodeName, currTotalDistance];
        }
      }
    });
  }

  // Construct the shortest path, walking
  // backwards from the destination
  let prevNode = table[destination][0];
  const path = [destination];
  while (prevNode) {
    path.unshift(prevNode);
    prevNode = table[prevNode][0];
  }

  return path;
};

console.log(djikstra(graph, "book", "piano"));
