var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  // figure out new key
  var newKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1] + 1;
  // add key and value pair
  this.storage[newKey] = string;
};

// Remove and return the string at the front of the queue
queueMethods.dequeue = function() {
  // check if empty
  if (Object.keys(this.storage).length === 0) {
    return;
  }
  // figure out first key
  var firstKey = Object.keys(this.storage)[0];
  // save first key value
  var value = this.storage[firstKey];
  // delete first key in storage
  delete this.storage[firstKey];
  // return first key value
  return value;
};

// Return the number of items in the queue
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


