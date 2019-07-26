# jest-date-mock

> Mock `Date` when run unit test cases with jest. Make tests of `Date` easier.

[![Build Status](https://travis-ci.org/hustcc/jest-date-mock.svg?branch=master)](https://travis-ci.org/hustcc/jest-date-mock)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/jest-date-mock/badge.svg?branch=master)](https://coveralls.io/github/hustcc/jest-date-mock)
[![npm](https://img.shields.io/npm/v/jest-date-mock.svg)](https://www.npmjs.com/package/jest-date-mock)
[![npm](https://img.shields.io/npm/dm/jest-date-mock.svg)](https://www.npmjs.com/package/jest-date-mock)


## Install

This should only be installed as a development dependency (`devDependencies`) as it is only designed for testing.

```bash
npm i --save-dev jest-date-mock
```


## Setup

In your `package.json` under the `jest`, create a `setupFiles` array and add `jest-date-mock` to the array.

```js
{
  "jest": {
    "setupFiles": ["jest-date-mock"]
  }
}
```

If you already have a `setupFiles` attribute you can also append `jest-date-mock` to the array.

```js
{
  "jest": {
    "setupFiles": ["./__setups__/other.js", "jest-date-mock"]
  }
}
```

More about in [configuration section](https://facebook.github.io/jest/docs/en/configuration.html#content).


## Setup file

Alternatively you can create a new setup file which then requires this module or
add the `require` statement to an existing setup file.

`__setups__/date.js`

```js
import 'jest-date-mock';
// or
require('jest-date-mock');
```

Add that file to your `setupFiles` array:

```js
"jest": {
  "setupFiles": [
    "./__setups__/date.js"
  ]
}
```


## Usage

> Use the only `3 api` for test cases.

 - `advanceBy(ms)`: advance date timestamp by `ms`.
 - `advanceTo([timestamp])`: reset date to `timestamp`, default to `0`.
 - `clear()`: shut down the mock system.

```js
import { advanceBy, advanceTo, clear } from 'jest-date-mock';

test('usage', () => {
  advanceTo(new Date(2018, 5, 27, 0, 0, 0)); // reset to date time.

  const now = Date.now();

  advanceBy(3000); // advance time 3 seconds
  expect(+new Date() - now).toBe(3000);

  advanceBy(-1000); // advance time -1 second
  expect(+new Date() - now).toBe(2000);

  clear();
  Date.now(); // will got current timestamp
});
```

More sample code [here](__tests__).


Also, add an API `Date.current()` to get the actual current timestamp.

```js
import { advanceBy, advanceTo, clear } from 'jest-date-mock';

advanceTo(0); // reset to timestamp = 0

Date.now(); // will got 0

Date.current(); // will got the actual timestamp.
```


## License

MIT@[hustcc](https://github.com/hustcc).
