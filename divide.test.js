const divide = require('./divide');

test('divides 6 by 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('handles floating point results', () => {
  expect(divide(1, 3)).toBeCloseTo(0.3333, 4);
});

test('throws an error when dividing by zero', () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});
