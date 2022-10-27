var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

//Add a string to the top of the stack
stackMethods.push = function(string){
  // figure out new key
  var newKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1] + 1;
  // add new key and value pair
  this.storage[newKey] = string;
};
//- Remove and return the string on the top of the stack
stackMethods.pop = function() {
  if (Object.keys(this.storage).length === 0) {
    return;
  }
  // figure out last key
  var lastKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
  // save value of last key
  var lastValue = this.storage[lastKey];
  // dlete last key
  delete this.storage[lastKey];
  // return value
  return lastValue;
}
//- Return the number of items on the stack
stackMethods.size = function() {
  return Object.keys(this.storage).length;
}
