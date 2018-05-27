/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

const DEFAULT = 0;

// current Date of timestamp
let nowDate = DEFAULT;

/**
 * move date by offset `ms`
 * @param ms
 */
export const advanceBy = ms => nowDate += ms;

/**
 * reset Date
 * if no parameter, then set to default
 * @param ms
 * @returns {*}
 */
export const advanceTo = ms => nowDate = ms ? +new Date(ms) : DEFAULT;

/**
 * current
 * @returns {number}
 */
export const now = () => nowDate;
