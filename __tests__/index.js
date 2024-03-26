/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

import { advanceBy, advanceTo, clear, version } from '../src';
import pkg from '../package.json';

afterEach(() => {
  clear();
});
describe('jest-date-mock', () => {
  test('Date Class', () => {
    advanceTo();
    // Date isEqual
    expect(new Date()).toEqual(new Date(0));

    // .constructor()
    expect(+new Date(1000).constructor()).toBe(0);
    expect(+new Date().constructor(10000)).toBe(10000);
    expect(new Date().constructor(10000)).toBeInstanceOf(Date);


    // +
    expect(+new Date()).toBe(0);
    expect(+new Date(10000)).toBe(10000);


    // getTime
    expect(new Date().getTime()).toBe(0);
    expect(new Date(10000).getTime()).toBe(10000);

    // instanceof
    expect(new Date()).toBeInstanceOf(Date);
    expect(new Date().constructor(10000)).toBeInstanceOf(Date);

    // 2018-05-27 08:00:00
    expect(new Date(Date.UTC(2018, 5, 27, 0, 0, 0)).getTime()).toBe(1530057600000);
    expect(new Date(2018, 5, 27, 0, 0, 0)).toEqual(new Date('2018-06-27 00:00:00'));

    class DerivedDate extends Date {}
    const derivedDate = new DerivedDate();

    expect(derivedDate).toBeInstanceOf(Date);
    expect(derivedDate).toBeInstanceOf(DerivedDate);
    expect(+derivedDate).toBe(0);

    expect(new Date()).not.toBe(new Date());

    expect(Date.name).toBe('Date');
  });

  test('Date.now', () => {
    advanceTo(1000);
    expect(Date.now()).toBe(1000);

    advanceTo();
    expect(Date.now()).toBe(0);

    advanceBy(520);
    expect(Date.now()).toBe(520);
  });

  test('performance.now', () => {
    const performance = global.window ?
      global.window.performance : require('perf_hooks').performance;

    advanceTo(1000);
    expect(performance.now()).toBe(1000);

    advanceTo();
    expect(performance.now()).toBe(0);

    advanceBy(520);
    expect(performance.now()).toBe(520);
  });

  test('Date.current', () => {
    advanceTo();
    expect(Date.now()).toBe(0);
    expect(Date.current() - new Date('2018-05-20') > 0).toBe(true);
  });

  test('advanceTo', () => {
    advanceTo(1000);
    expect(+new Date()).toBe(1000);

    advanceTo();
    expect(+new Date()).toBe(0);
  });

  test('advanceBy', () => {
    advanceBy(3000); // advanceBy time 3 seconds
    const now = new Date();
    advanceBy(4000);
    expect(+new Date() - now).toBe(4000);

    advanceBy(-4000); // advanceBy time -4 seconds
    expect(+new Date() - now).toBe(0);
    advanceBy();
    expect(+new Date() - now).toBe(0);

    advanceBy(3000);
    expect(+new Date().constructor() - now).toBe(3000); // .constructor()
  });

  test('clear', () => {
    clear();
    expect(Date.now() - new Date('2018-05-20') > 0).toBe(true);

    advanceTo();
    expect(+new Date()).toBe(0);
    expect(+new Date().constructor()).toBe(0);
  });

  test('usage', () => {
    advanceTo(new Date(2018, 5, 27, 0, 0, 0)); // advanceTo to date time.

    const now = Date.now();

    // 0 timezone +  timezone offset
    expect(now).toBe(1530057600000  + new Date().getTimezoneOffset() * 60000);

    advanceBy(3000); // advanceBy time 3 seconds
    expect(+new Date() - now).toBe(3000);

    advanceBy(-1000); // advanceBy time -1 second
    expect(+new Date() - now).toBe(2000);
  });

  test('version', () => {
    expect(version).toBe(pkg.version);
  });
});
