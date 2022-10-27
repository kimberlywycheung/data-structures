var Queue = function() {
  var instance = {
    storage: {},
    length: 0
  };

  instance.enqueue = function(value) {
    for (var i = instance.length; i > 0; i--) {
      instance.storage[i] = instance.storage[i - 1];
    }
    instance.storage[0] = value;
    instance.length++;
    // instance.storage.unshift(value);
  };

  instance.dequeue = function() {
    // return instance.storage.pop();
    var outValue = instance.storage[instance.length - 1];
    delete instance.storage[instance.length - 1];
    instance.length = Math.max(instance.length - 1, 0);
    return outValue;
  };

  instance.size = function() {
    // return instance.storage.length;
    return instance.length;
  };

  return instance;
};
