/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */

import { advanceBy, advanceTo } from '../src';

beforeEach(() => {
  advanceTo(); // advanceTo to 0 ms.
});

describe('jest-date-mock', () => {
  test('Date Class', () => {
    // Date isEqual
    expect(new Date()).toEqual(new Date(0));

    // +
    expect(+new Date()).toBe(0);
    expect(+new Date(10000)).toBe(10000);

    // getTime
    expect(new Date().getTime()).toBe(0);
    expect(new Date(10000).getTime()).toBe(10000);

    // instanceof
    expect(new Date() instanceof Date).toBe(true);

    // 2018-05-27 08:00:00
    expect(new Date(Date.UTC(2018, 5, 27, 0, 0, 0)).getTime()).toBe(1530057600000);
  });

  test('Date.now', () => {
    advanceTo(1000);
    expect(Date.now()).toBe(1000);

    advanceTo();
    expect(Date.now()).toBe(0);

    advanceBy(520);
    expect(Date.now()).toBe(520);
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
    advanceTo(1000);
    advanceBy(3000); // advanceBy time 3 seconds
    expect(+new Date()).toBe(4000);

    advanceBy(-4000); // advanceBy time -4 seconds
    expect(+new Date()).toBe(0);
  });

  test('usage', () => {
    advanceTo(new Date(2018, 5, 27, 0, 0, 0)); // advanceTo to date time.

    const now = Date.now();

    advanceBy(3000); // advanceBy time 3 seconds
    expect(+new Date() - now).toBe(3000);

    advanceBy(-1000); // advanceBy time -1 second
    expect(+new Date() - now).toBe(2000);
  });
});
