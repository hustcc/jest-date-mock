/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

export { advanceBy, advanceTo, clear } from './date';

import { mockDateClass } from './mockDate';

// mock Date class
const dateClass = mockDateClass(Date);

if (global.window) {
  // dom env
  global.window.Date = dateClass;
} else {
  // node / native env
  global.Date = dateClass;
}

export const version = __VERSION__;
