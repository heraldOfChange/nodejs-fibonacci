'use strict';

const pretty = (array) => array.filter(x => typeof x === 'object').length > 0 ?
    array.map(x => `{${x.join(',')}}`).join(' ') : `{${array.join(',')}}`;

describe('FibonacciBuilder', () => {
    describe('is able to construct a fibonacci sequence given two starting numbers', () => {
        [
            {
                starters: [],
                expected: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]
            },
            {
                starters: [1, 2],
                expected: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946]
            },
            {
                starters: [1, 4],
                expected: [1, 4, 5, 9, 14, 23, 37, 60, 97, 157, 254, 411, 665, 1076, 1741, 2817, 4558, 7375, 11933, 19308]
            },
            {
                starters: [2, 3],
                expected: [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711]
            }
        ].forEach(testData => {
            const input = testData.starters;
            const expected = testData.expected;

            it(`generateFibonacciSequence for input: ${pretty(input)} returns ${pretty(expected)}`, () => {
                const FibonacciBuilder = require('../main/fibonacci-builder-factory')();
                input.length > 0 ? FibonacciBuilder.initialize(input) : FibonacciBuilder.initialize();
                const actual = FibonacciBuilder.generateFibonacciSequence();

                expect(actual).toEqual(expected);
            });
        });
    });
});
