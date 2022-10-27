var Stack = function() {
  var instance = {
    storage: {},
    length: 0
  };

  instance.push = function (value) {
    instance.storage[instance.length] = value;
    instance.length++;
  };
  instance.pop = function() {
    var out = instance.storage[instance.length - 1];
    instance.length = Math.max(instance.length - 1, 0);
    delete instance.storage[instance.length];
    return out;
  };
  instance.size = function() {
    return instance.length;
  };

  return instance;
};
