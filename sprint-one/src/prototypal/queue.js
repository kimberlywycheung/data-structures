var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = [];
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage.unshift(value);
};

queueMethods.dequeue = function () {
  return this.storage.pop();
};

queueMethods.size = function () {
  return this.storage.length;
};


