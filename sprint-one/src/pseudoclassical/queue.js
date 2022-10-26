var Queue = function() {
  this.storage = [];
};

Queue.prototype.enqueue = function (value) {
  this.storage.unshift(value);
};

Queue.prototype.dequeue = function () {
  return this.storage.pop();
};

Queue.prototype.size = function () {
  return this.storage.length;
};
