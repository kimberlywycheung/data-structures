var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(string) { //- Add a string to the top of the stack
  var newKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1] + 1;
  this.storage[newKey] = string;
};

Stack.prototype.pop = function() { //- Remove and return the string on the top of the stack
  var lastKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
  var value = this.storage[lastKey];
  delete this.storage[lastKey];
  return value;
};

Stack.prototype.size = function() { //- Return the number of items on the stack
  return Object.keys(this.storage).length;
};



