'use strict';
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
chai.should();

describe('sinon tests', () => {
  let student;

  beforeEach(() => {
    student = {
      dropClass: (classId, cb) => {
        //do stuff
        cb();
      }
    };
  });
  describe('student.dropClass', () => {
    it('should call callback', () => {
      let called = false;
      const callback = () => {
        called = true;
      };

      student.dropClass(1, callback);
      expect(called).to.be.true;
    });

    it('spy on callback', () => {
      let spy = sinon.spy();
      student.dropClass(1, spy);
      spy.called.should.be.true;
    });
  });
});
