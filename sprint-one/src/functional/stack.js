var Stack = function() {
  var instance = {
    storage: []
  };

  instance.push = function (value) {
    instance.storage.push(value);
  };
  instance.pop = function() {
    return instance.storage.pop();
  };
  instance.size = function() {
    return instance.storage.length;
  };

  return instance;
};
