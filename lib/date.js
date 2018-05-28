"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

var DEFAULT = undefined;

// current Date of timestamp
var nowDate = DEFAULT;

/**
 * move date by offset `ms`
 * @param ms
 */
var advanceBy = exports.advanceBy = function advanceBy(ms) {
  return nowDate += ms || 0;
};

/**
 * reset Date
 * if no parameter, then set to 0
 * @param ms
 * @returns {*}
 */
var advanceTo = exports.advanceTo = function advanceTo(ms) {
  return nowDate = ms ? +new Date(ms) : 0;
};

/**
 * clear mock
 * @returns {undefined}
 */
var clear = exports.clear = function clear() {
  return nowDate = DEFAULT;
};

/**
 * current
 * @returns {number}
 */
var now = exports.now = function now() {
  return nowDate;
};