/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

import { now } from './date';

export const mockDateClass = D => {
  const mockNow = () => now() === undefined ? D.now() : now();

  function MD(...args) {
    const dateArgs = args.length === 0 ? [mockNow()] : args;
    const instance = new D(...dateArgs);
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  MD.prototype = Object.create(D.prototype);
  Object.setPrototypeOf(MD, D);

  // undefined means do not mock date
  MD.now = () => mockNow();
  // original Date class
  MD.__OriginalDate__ = D;
  // current() is for test.
  MD.current = () => D.now();

  return MD;
};
