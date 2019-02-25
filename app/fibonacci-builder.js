'use strict';

const sortAscending = (arrayInstance) => arrayInstance.sort((a, b) => a - b);
const sum = (a, b) => a + b;

class FibonacciBuilder {
  constructor() {
    this.fibonacciSeqence = [];
  }

  initialize(initialSequence) {
    this.fibonacciSeqence = initialSequence || [ 1, 1 ];

    return this;
  }

  generateFibonacciSequence(arrayLength) {
    const sequence = new Array(arrayLength - this.fibonacciSeqence.length).fill(0);
    this.fibonacciSeqence = [ ...this.fibonacciSeqence, ...sequence ];

    this.fibonacciSeqence
      .forEach((value, index, array) => {
        if (index > 1) this.fibonacciSeqence[index] = sum(array[index - 2], array[index - 1]);
      });

    return sortAscending(this.fibonacciSeqence);
  }
}

module.exports = () => new FibonacciBuilder();