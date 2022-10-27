var Stack = function() {
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function (value) {
  // this.storage.push(value);
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function () {
  // return this.storage.pop();
  var out = this.storage[this.length - 1];
  this.length = Math.max(this.length - 1, 0);
  delete this.storage[this.length];
  return out;
};

Stack.prototype.size = function () {
  // return this.storage.length;
  return this.length;
};




