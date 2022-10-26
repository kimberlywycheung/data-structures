var Queue = function() {
  var instance = {
    storage: [],
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size
  };
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


