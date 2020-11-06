const chai = require('chai');
const expect = chai.expect;
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const arraysFlattering = require('../algorithms/flattening');

describe(`Arrays flattering algorithms`,() => {
    const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    const flatArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    describe(`Own implementation`, () =>{
        it('should return all flat array', function () {
            expect(arraysFlattering.flatListOwnImplementation(nestedArray)).to.be.equalTo(flatArray);
        });
        it('should return all flat array, when get flat array', function () {
            expect(arraysFlattering.flatListOwnImplementation(flatArray)).to.be.equalTo(flatArray);
        });
    })
    describe(`flat() method`, () =>{
        it('should return all flat array', function () {
            expect(arraysFlattering.flatList(nestedArray)).to.be.equalTo(flatArray);
        });
        it('should return all flat array, when get flat array', function () {
            expect(arraysFlattering.flatList(flatArray)).to.be.equalTo(flatArray);
        });
    })

})