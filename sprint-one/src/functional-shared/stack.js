var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {}
  }

  _.extend(instance, stackMethods);

  return instance;
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
  // check if there is anything to pop
  if (Object.keys(this.storage).length === 0) {
    return;
  }
  // figure out last key
  var lastKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
  // save value at last key
  var lastKeyValue = this.storage[lastKey];
  // delete first key
  delete this.storage[lastKey];
  // return value
  return lastKeyValue;
}
//- Return the number of items on the stack
stackMethods.size = function() {
  return Object.keys(this.storage).length;
}
