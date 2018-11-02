'use strict';

const ascendingSorter = (arrayInstance) => arrayInstance.sort((a, b) => a - b);
const sum = (a, b) => a + b;

class FibonacciBuilder {
    constructor() {
        this.fibonacciSeqence = [];
    }

    initialize(initialSequence) {
        this.fibonacciSeqence = initialSequence || [1, 1];

        return this;
    }

    generateFibonacciSequence() {
        const sequence = new Array(18).fill(0);
        this.fibonacciSeqence = this.fibonacciSeqence.concat(sequence);

        this.fibonacciSeqence.forEach((value, index, array) => {
            if (index > 1) this.fibonacciSeqence[index] = sum(array[index - 2], array[index - 1]);
        });

        return ascendingSorter(this.fibonacciSeqence);
    }
}

module.exports = () => new FibonacciBuilder();