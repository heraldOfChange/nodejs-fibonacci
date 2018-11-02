'use strict';

describe('FibonacciBuilderFactory', () => {
    describe('returns an instance of FibonacciBuilder', () => {
        it('calling the factory method returns an instance of FibonacciBuilder', () => {
            const FibonacciBuilder = require('../main/fibonacci-builder-factory');
            expect(typeof FibonacciBuilder).toBe('function');
            expect(FibonacciBuilder()).not.toBe(null);
        });
    });
});