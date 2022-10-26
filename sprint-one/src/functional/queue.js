var Queue = function() {
  var instance = {
    storage: []
  };

  instance.enqueue = function(value) {
    instance.storage.unshift(value);
  };

  instance.dequeue = function() {
    return instance.storage.pop();
  };

  instance.size = function() {
    return instance.storage.length;
  };

  return instance;
};
