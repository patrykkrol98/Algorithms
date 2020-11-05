const assert = require('chai').assert;
const binarySearch = require('../algorithms/binary');

describe(`Binary Search`, () => {
    describe(`Basic, pre-define numbers and array`, () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const containNumber = 8;
        const doesntContainNumber = 23;
        it('should return true if number contain in array', () => {
            assert.equal(binarySearch(arr, containNumber), true);
        });
        it(`should return false if number doesn't contain in array`, () => {
            assert.equal(binarySearch(arr, doesntContainNumber), false);
        });
    })
    describe(`Random generated arrays`,() =>{
        const ARRAY_LENGTH = 10000
        const randomArray = []
        for(let i = 0; i<ARRAY_LENGTH; i++) {randomArray.push(Math.random())}
        const containNumber = randomArray[Math.floor(Math.random() * randomArray.length)];
        const doesntContainNumber = -1;

        it('should return true if number contain in array', () => {
            assert.equal(binarySearch(randomArray, containNumber), true);
        });
        it(`should return false if number doesn't contain in array`, () => {
            assert.equal(binarySearch(randomArray, doesntContainNumber), false);
        });
    })
})