class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    // this.storage.push(value);
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    // return this.storage.pop();
    var out = this.storage[this.length - 1];
    this.length = Math.max(this.length - 1, 0);
    delete this.storage[this.length];
    return out;
  }

  size() {
    // return this.storage.length;
    return this.length;
  }
}