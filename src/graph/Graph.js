class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(key) {
    if(!this.adjacencyList[key]) {
      this.adjacencyList[key] = []; 
    }
  }

  addEdge(key1, key2) {
    this.adjacencyList[key1].push(key2);
    this.adjacencyList[key2].push(key1);
  }

  removeEdge(key1, key2) {
    if(this.adjacencyList[key1] && this.adjacencyList[key1].length) {
      this.adjacencyList[key1] = this.adjacencyList[key1].filter(
        v => v !== key2
      );
    }
    
    if(this.adjacencyList[key2] && this.adjacencyList[key2].length) {
      this.adjacencyList[key2] = this.adjacencyList[key2].filter(
        v => v !== key1
      ); 
    }
  }

  removeVertex(key) {
    for(let edge in this.adjacencyList) {
      this.removeEdge(edge, key);
    }
    delete this.adjacencyList[key];
  }

  // Depth first Graph traversal recursively.
  depthFirstRecursive(startVertex) {
    const results = [];
    const visitedNodes = {};

    const invokeGraph = vertex => {
      // If no vertex stop recursion.
      if(!vertex) return;

      if(!visitedNodes[vertex]) {
        // Add current vertex to visited list. 
        visitedNodes[vertex] = true;
        // Push it to results.
        results.push(vertex);
        // Invoke all edges.
        this.adjacencyList[vertex].forEach(node => {
          if(!visitedNodes.hasOwnProperty(node)) {
            invokeGraph(node);
          }
        });
      }
    };
    // Invoke graph recursively.
    invokeGraph(startVertex);

    return results;
  }

  // Depth first iterative Graph traversal.
  depthFirstIterative(startVertex) {
    const stack = [startVertex];
    const results = [];
    const visitedNodes = {};
    let currentVertex;
    
    visitedNodes[startVertex] = true;

    while(stack.length) {
      currentVertex = stack.pop();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(
        node => {
          if(!visitedNodes[node]) {
            visitedNodes[node] = true;
            stack.push(node);
          }
        } 
      );
    }
    return results;
  }

  // Breadth first iterative Graph traversal.
  breadthFirstIterative(startVertex) {
    const queue = [startVertex];
    const results = [];
    const visitedNodes = {};
    let currentVertex;
    
    visitedNodes[startVertex] = true;

    while(queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(
        node => {
          if(!visitedNodes[node]) {
            visitedNodes[node] = true;
            queue.push(node);
          }
        } 
      );
    }
    return results;
  }
}


// let g = new Graph();
// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")

// g.addEdge("A","B")
// g.addEdge("A","C")
// g.addEdge("B","D")
// g.addEdge("C","E")
// g.addEdge("D","E")
// g.addEdge("D","F")
// g.addEdge("E","F")

// Give a Graph like:

//      A
//    /   \
//    B   C
//    |   |
//    D---E
//    \   /
//      F
