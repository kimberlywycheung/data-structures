class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(string) {
    var lastKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1] + 1;
    this.storage[lastKey] = string;
  }

  pop() {
    var lastKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
    var value = this.storage[lastKey];
    delete this.storage[lastKey];
    return value;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}