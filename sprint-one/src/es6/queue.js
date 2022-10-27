class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  enqueue(value) {
    // this.storage.unshift(value);
    for (var i = this.length; i > 0; i--) {
      this.storage[i] = this.storage[i - 1];
    }
    this.storage[0] = value;
    this.length++;
  }

  dequeue() {
    // return this.storage.pop();
    var outValue = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length = Math.max(this.length - 1, 0);
    return outValue;
  }

  size() {
    // return this.storage.length;
    return this.length;
  }

}
