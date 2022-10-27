// note: todo: refactor away from es6, spec does not allow for this one

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  addChild (value) {
    // make new tree with value
    var newTree = new Tree(value);
    // add to this.children
    this.children.push(newTree);
  }

  contains(target) {
    var searchTree = function (tree) {
      if (tree.value === target) {
        return true;
      } else {
        if (tree.children.length > 0) {
          for (var i = 0; i < tree.children.length; i++) {
            if (searchTree(tree.children[i])) {
              return true;
            }
          }
          return false;
        } else {
          return false;
        }
      }
    };
  }

treeMethods.addChild = function(value) {
  // make new tree with value
  var newTree = new Tree(value);
  // add to this.children
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var searchTree = function (tree) {
    if (tree.value === target) {
      return true;
    } else {
      if (tree.children.length > 0) {
        for (var i = 0; i < tree.children.length; i++) {
          if (searchTree(tree.children[i])) {
            return true;
          }
        }
        return false;
      } else {
        return false;
      }
    }
  };

  return searchTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
