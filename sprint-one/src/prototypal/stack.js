var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = [];
  return instance;
};

var stackMethods = {};

// Stack.prototype.pop = function () {
//   return this.storage.pop();
// };

// Stack.prototype.push = function (value) {
//   this.storage.push(value);
// };

// Stack.prototype.size = function () {
//   return this.storage.length;
// };

stackMethods.pop = function () {
  return this.storage.pop();
};

stackMethods.push = function (value) {
  this.storage.push(value);
};

stackMethods.size = function () {
  return this.storage.length;
};



