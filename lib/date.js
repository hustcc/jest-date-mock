"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

var DEFAULT = 0;

// current Date of timestamp
var nowDate = DEFAULT;

/**
 * move date by offset `ms`
 * @param ms
 */
var advanceBy = exports.advanceBy = function advanceBy(ms) {
  return nowDate += ms;
};

/**
 * reset Date
 * if no parameter, then set to default
 * @param ms
 * @returns {*}
 */
var advanceTo = exports.advanceTo = function advanceTo(ms) {
  return nowDate = ms ? +new Date(ms) : DEFAULT;
};

/**
 * current
 * @returns {number}
 */
var now = exports.now = function now() {
  return nowDate;
};