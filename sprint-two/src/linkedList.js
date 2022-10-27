var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new Node with value
    var newNode = Node(value);
    // if list is empty, add new node to head
    if (list.head === null) {
      list.head = newNode;
    }
    // update list.tail.next to new node
    if (list.tail !== null) {
      list.tail.next = newNode;
    }
    // update list.tail to new Node
    list.tail = newNode;
  };

  list.removeHead = function() {
    // check if head exists
    if (list.head !== null) {
      // save head value
      var value = list.head.value;
      // update list.head to list.head.next
      list.head = list.head.next;
      // return head value
      return value;
    }
  };

  list.contains = function(target) {

    var searchNextNode = function(node) {
      if (node.value === target) {
        return true;
      } else {
        if (node.next !== null) {
          return searchNextNode(node.next);
        } else {
          return false;
        }
      }
    };

    return searchNextNode(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
