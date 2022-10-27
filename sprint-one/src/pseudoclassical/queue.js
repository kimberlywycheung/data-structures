var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

//- Add a string to the back of the queue
Queue.prototype.enqueue = function(string) {
  var newKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1] + 1;
  this.storage[newKey] = string;
}
//- Remove and return the string at the front of the queue
Queue.prototype.dequeue = function() {
  var firstKey = Object.keys(this.storage)[0];
  var value = this.storage[firstKey];
  delete this.storage[firstKey];
  return value;
}
//- Return the number of items in the queue
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}


