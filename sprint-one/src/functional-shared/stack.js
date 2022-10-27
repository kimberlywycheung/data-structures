var Stack = function() {
  var instance = {
    storage: {},
    length: 0,
    pop: stackMethods.pop,
    push: stackMethods.push,
    size: stackMethods.size
  };
  return instance;
};

var stackMethods = {};

stackMethods.pop = function () {
  // return this.storage.pop();
  var out = this.storage[this.length - 1];
  this.length = Math.max(this.length - 1, 0);
  delete this.storage[this.length];
  return out;
};

stackMethods.push = function (value) {
  // this.storage.push(value);
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.size = function () {
  // return this.storage.length;
  return this.length;
};
