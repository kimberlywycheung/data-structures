var Stack = function() {
  var instance = {
    storage: [],
    pop: stackMethods.pop,
    push: stackMethods.push,
    size: stackMethods.size
  };
  return instance;
};

var stackMethods = {};

stackMethods.pop = function () {
  return this.storage.pop();
};

stackMethods.push = function (value) {
  this.storage.push(value);
};

stackMethods.size = function () {
  return this.storage.length;
};
