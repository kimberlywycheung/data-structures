var Queue = function() {
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function (value) {
  // this.storage.unshift(value);
  for (var i = this.length; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
  this.length++;
};

Queue.prototype.dequeue = function () {
  // return this.storage.pop();
  var outValue = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length = Math.max(this.length - 1, 0);
  return outValue;
};

Queue.prototype.size = function () {
  // return this.storage.length;
  return this.length;
};
