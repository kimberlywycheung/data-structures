var Queue = function() {
  var instance = {
    storage: {},
    length: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // figure out last numeric key
    var newKey = Object.keys(storage)[Object.keys(storage).length - 1] + 1;
    // add new numeric key, with value as value
    storage[newKey] = value;
  };

  someInstance.dequeue = function() {
    if (Object.keys(storage).length === 0) {
      return;
    }
    // figure out first numeric key
    var firstKey = Object.keys(storage)[0];
    // save value at first key
    var value = storage[firstKey];
    // remove key
    delete storage[firstKey];
    // return value
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return instance;
};
