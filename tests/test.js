'use strict';

const isEven = require('../src/isEven');
const chai = require('chai');

chai.should();

describe('isEven', () => {
  it('should return true when a number is even', () => {
    isEven(4).should.be.true;
  });
});
