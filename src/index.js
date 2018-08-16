/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

export { advanceBy, advanceTo, clear } from './date';

import { mockDateClass } from './mockDate';

// mock Date class
const dateClass = mockDateClass(Date);
if (global.window) {
    global.window.Date = dateClass;
} else {
    global.Date = dateClass;
}
