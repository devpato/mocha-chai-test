'use strict';
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
chai.should();

describe('sinon tests', () => {
  let student;
  let schedule;

  beforeEach(() => {
    student = {
      dropClass: (classId, cb) => {
        if (!!cb.dropClass) {
          cb.dropClass();
        } else {
          cb();
        }
      },

      addClass: schedule => {
        if (!schedule.classIsFull()) {
          return true;
        } else {
          return false;
        }
      }
    };

    schedule = {
      dropClass: () => {
        console.log('**Class dropped**');
      },
      classIsFull: () => {
        return true;
      }
    };
  });
  describe('student.dropClass', () => {
    it('should call callback and log the console', () => {
      const onClassDropped = () => {
        console.log('***my class dropped***');
      };
      const spy = sinon.spy(onClassDropped);
      student.dropClass(1, spy);
      spy.called.should.be.true;
    });

    it('spy on callback', () => {
      let spy = sinon.spy();
      student.dropClass(1, spy);
      spy.called.should.be.true;
    });

    it('spy on callback even if its a method or object', () => {
      sinon.spy(schedule, 'dropClass');
      student.dropClass(1, schedule);
      schedule.dropClass.called.should.be.true;
    });
  });

  describe('student with stubs', () => {
    it('should call a stubbed method', () => {
      const stub = sinon.stub(schedule);
      student.dropClass(1, stub.dropClass);
      stub.dropClass.called.should.be.true;
    });

    it('should return true when class is not full', () => {
      const stub = sinon.stub(schedule);
      stub.classIsFull.returns(false);
      const returnVal = student.addClass(stub);
      returnVal.should.be.true;
    });
  });

  describe('student with mocks', () => {
    it('mocks schedule', () => {
      const mockObj = sinon.mock(schedule);
      const expectation = mockObj.expects('classIsFull').once();
      student.addClass(schedule);
      expectation.verify();
    });
  });
});
