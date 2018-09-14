'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockDateClass = undefined;

var _date = require('./date');

var mockDateClass = exports.mockDateClass = function mockDateClass(D) {
  var mockNow = function mockNow() {
    return (0, _date.now)() === undefined ? D.now() : (0, _date.now)();
  };

  function MD() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var dateArgs = args.length === 0 ? [mockNow()] : args;
    var instance = new (Function.prototype.bind.apply(D, [null].concat(dateArgs)))();
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  MD.prototype = Object.create(D.prototype);
  Object.setPrototypeOf(MD, D);

  // undefined means do not mock date
  MD.now = function () {
    return mockNow();
  };
  // original Date class
  MD.__OriginalDate__ = D;
  // current() is for test.
  MD.current = function () {
    return D.now();
  };

  return MD;
}; /**
    * Created by hustcc 18/05/27.
    * Contract: i@hust.cc
    */