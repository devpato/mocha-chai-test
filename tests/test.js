'use strict';

const isEven = require('../src/isEven');
const add = require('../src/add');
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

  describe('add without step teardown', () => {
    let num;

    beforeEach(() => {
      num = 5;
    });

    it('should return true when a number is even', () => {
      num = add(num, 5);
      num.should.equal(10);
    });

    it('should return true when a number is even', () => {
      add(num, 7).should.equal(12);
    });
  });
});
