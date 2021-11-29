const { checkValidity } = require('../tplink');

it('should pass validity check', () => {
  expect(() => {
    checkValidity('HS100', 'powerOn')
  }).not.toThrow();
});

it('should throw error that device type is not supported', () => {
  expect(() => {
    checkValidity('HS1234', 'powerOn')
  }).toThrow(new Error('Unsupported device (HS1234), supported devices are: [HS100]'));
});

it('should throw error that device operation is not supported', () => {
  expect(() => {
    checkValidity('HS100', 'unplug')
  }).toThrow(new Error('Unsupported operation (unplug), supported operations are: powerOn,powerOff'));
});

