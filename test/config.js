/**
 * @description config for console
 */

global.console = {
  log: jest.fn(), // console.log are ignored in tests
  // log: console.log, // console.log are shown in tests

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};
