// note: todo: refactor away from es6, spec does not allow for this one

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

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



}


/*
 * Complexity: What is the time complexity of the above functions?
 */
