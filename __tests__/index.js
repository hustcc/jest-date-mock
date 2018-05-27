/**
 * Created by hustcc 18/05/27.
 * Contract: i@hust.cc
 */
import { advance, reset } from '../src';

beforeEach(() => {
  reset(); // reset to 0 ms.
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

  test('reset', () => {
    reset(1000);
    expect(+new Date()).toBe(1000);

    reset();
    expect(+new Date()).toBe(0);
  });

  test('advance', () => {
    reset(1000);
    advance(3000); // advance time 3 seconds
    expect(+new Date()).toBe(4000);

    advance(-4000); // advance time -4 seconds
    expect(+new Date()).toBe(0);
  });

  test('Date.now', () => {
    reset(1000);
    expect(Date.now()).toBe(1000);

    reset();
    expect(Date.now()).toBe(0);

    advance(520);
    expect(Date.now()).toBe(520);
  });

  test('usage', () => {
    reset(new Date(2018, 5, 27, 0, 0, 0)); // reset to date time.

    const now = Date.now();

    advance(3000); // advance time 3 seconds
    expect(+new Date() - now).toBe(3000);

    advance(-1000); // advance time -1 second
    expect(+new Date() - now).toBe(2000);
  });
});
