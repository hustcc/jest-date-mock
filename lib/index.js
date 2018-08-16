'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clear = exports.advanceTo = exports.advanceBy = undefined;

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
Object.defineProperty(exports, 'clear', {
    enumerable: true,
    get: function get() {
        return _date.clear;
    }
});

var _mockDate = require('./mockDate');

// mock Date class
var dateClass = (0, _mockDate.mockDateClass)(Date);
if (global.window) {
    global.window.Date = dateClass;
} else {
    global.Date = dateClass;
}