/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

// undefined means unmock.
const DEFAULT = undefined;

// current Date of timestamp
let nowDate = DEFAULT;

/**
 * move date by offset `ms`
 * @param ms
 */
export const advanceBy = ms => nowDate = (nowDate === undefined ? +new Date() : nowDate) + (ms || 0);

/**
 * reset Date
 * if no parameter, then set to 0
 * @param ms
 * @returns {*}
 */
export const advanceTo = ms => nowDate = ms ? +new Date(ms) : 0;

/**
 * clear mock
 * @returns {undefined}
 */
export const clear = () => nowDate = DEFAULT;

/**
 * current
 * @returns {number}
 */
export const now = () => nowDate;
