'use strict';

const add = require('../src/add');
const chai = require('chai');
chai.should();

describe('number tests', () => {
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
