/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

import { now } from './date';

export const mockDateClass = D => {
  // if undefined, use real date, or else mock date
  const mockNow = () => now() === undefined ? D.now() : now();

  function Date(...args) {
    const dateArgs = args.length === 0 ? [mockNow()] : args;
    const instance = new D(...dateArgs);
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  Date.prototype = Object.create(D.prototype);
  Object.setPrototypeOf(Date, D);

  // undefined means do not mock date
  Date.now = () => mockNow();
  // original Date class
  Date.__OriginalDate__ = D;
  // current() is for test.
  Date.current = () => D.now();

  return Date;
};
