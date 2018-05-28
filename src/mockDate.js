/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

import { now } from './date';

export const mockDateClass = D => {
  const mockNow = () => now() === undefined ? D.now() : now();

  const MD = function(...p) {
    const d = new D(...(p.length === 0 ? [mockNow()] : p));

    MD.prototype = D.prototype;

    return d;
  };

  // undefined means do not mock date
  MD.now = () => mockNow();
  MD.UTC = D.UTC;

  // original Date class
  MD.__OriginalDate__ = D;
  // current() is for test.
  MD.current = () => D.now();

  return MD;
};
