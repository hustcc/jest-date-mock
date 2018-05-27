/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

import { now } from './date';

export const mockDateClass = D => {
  const MD = function(...p) {
    const d = new D(...(p.length === 0 ? [now()] : p));

    MD.prototype = D.prototype;

    return d;
  };

  MD.now = () => now();
  MD.UTC = D.UTC;

  // original Date class
  MD.__OriginalDate__ = D;

  return MD;
};
