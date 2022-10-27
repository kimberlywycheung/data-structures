var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {}
  }

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

// Adds a string to the back of the queue
queueMethods.enqueue = function(string) {
  var keysArray = Object.keys(this.storage);
  // figure out new key
  var newKey = keysArray[keysArray.length - 1] + 1;
  // add key and value pair
  this.storage[newKey] = string;
};

// Remove and return the string at the front of the queue
queueMethods.dequeue = function() {
  // figure out first key
  var firstKey = Object.keys(this.storage)[0];
  // save first key value
  var firstKeyValue = this.storage[firstKey];
  // delete first key in storage
  delete this.storage[firstKey];
  // return first key value
  return firstKeyValue;
};

// Return the number of items in the queue
queueMethods.size = function() {
  console.log(this.storage);
  return Object.keys(this.storage).length;
};
