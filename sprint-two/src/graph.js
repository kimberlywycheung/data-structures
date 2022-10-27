
// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);
  graph.nodes = {};
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes[node].length; i++) {
    var otherNode = this.nodes[this.nodes[node][i]];
    var i = otherNode.indexOf(node.toString());
    otherNode.splice(i, 1);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.nodes[fromNode].includes(toNode.toString()) && this.nodes[toNode].includes(fromNode.toString()));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // make sure we don't add dups
  if (!this.nodes[fromNode].includes(toNode.toString())) {
    this.nodes[fromNode].push(toNode.toString());
  }
  if (!this.nodes[toNode].includes(fromNode.toString())) {
    this.nodes[toNode].push(fromNode.toString());
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    return;
  }
  var i1 = this.nodes[fromNode].indexOf(toNode.toString());
  this.nodes[fromNode].splice(i1, 1);
  var i2 = this.nodes[toNode].indexOf(fromNode.toString());
  this.nodes[toNode].splice(i2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


