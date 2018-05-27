'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = exports.advance = undefined;

var _date = require('./date');

Object.defineProperty(exports, 'advance', {
  enumerable: true,
  get: function get() {
    return _date.advance;
  }
});
Object.defineProperty(exports, 'reset', {
  enumerable: true,
  get: function get() {
    return _date.reset;
  }
});

var _mockDate = require('./mockDate');

// mock Date class
global.window.Date = (0, _mockDate.mockDateClass)(window.Date);