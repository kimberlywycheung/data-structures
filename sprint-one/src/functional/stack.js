var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // figure out last key
    var newKey = Object.keys(storage)[Object.keys(storage).length - 1] + 1;
    // add new key and value pair
    storage[newKey] = value;
  };

  someInstance.pop = function() {
    if (Object.keys(storage).length === 0) {
      return;
    }
    // figure out last key
    var lastKey = Object.keys(storage)[Object.keys(storage).length - 1];
    // save value at last key
    var value = storage[lastKey];
    // delete last key
    delete storage[lastKey];
    // return value
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
