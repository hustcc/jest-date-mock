'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.advanceTo = exports.advanceBy = undefined;

var _date = require('./date');

Object.defineProperty(exports, 'advanceBy', {
  enumerable: true,
  get: function get() {
    return _date.advanceBy;
  }
});
Object.defineProperty(exports, 'advanceTo', {
  enumerable: true,
  get: function get() {
    return _date.advanceTo;
  }
});

var _mockDate = require('./mockDate');

// mock Date class
global.window.Date = (0, _mockDate.mockDateClass)(window.Date);