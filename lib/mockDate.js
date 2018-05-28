'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockDateClass = undefined;

var _date = require('./date');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Created by hustcc 18/05/27.
                                                                                                                                                                                                     * Contract: i@hust.cc
                                                                                                                                                                                                     */

var mockDateClass = exports.mockDateClass = function mockDateClass(D) {
  var mockNow = function mockNow() {
    return (0, _date.now)() === undefined ? D.now() : (0, _date.now)();
  };

  var MD = function MD() {
    for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
      p[_key] = arguments[_key];
    }

    var d = new (Function.prototype.bind.apply(D, [null].concat(_toConsumableArray(p.length === 0 ? [mockNow()] : p))))();

    MD.prototype = D.prototype;

    return d;
  };

  // undefined means do not mock date
  MD.now = function () {
    return mockNow();
  };
  MD.UTC = D.UTC;

  // original Date class
  MD.__OriginalDate__ = D;
  // current() is for test.
  MD.current = function () {
    return D.now();
  };

  return MD;
};