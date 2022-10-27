class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(string) {
    var lastKey = Object.keys(this.storage)[Object.keys(this.storage).length - 1] + 1;
    this.storage[lastKey] = string;
  }

  dequeue() {
    var firstKey = Object.keys(this.storage)[0];
    var value = this.storage[firstKey];
    delete this.storage[firstKey];
    return value;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
