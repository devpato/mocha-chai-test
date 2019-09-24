'use strict';

const isEven = require('../src/isEven');
const chai = require('chai');
const expect = chai.expect;
chai.should();

describe('number tests', () => {
  describe('isEven', () => {
    it('should return true when a number is even', () => {
      isEven(4).should.be.true;
    });

    it('should return false when a number is odd', () => {
      expect(isEven(5).should.be.false);
    });
  });
});
