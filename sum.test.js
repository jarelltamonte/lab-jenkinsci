const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 7 + 7 to equal 14', () => {
    expect(sum(7, 7)).toBe(14);
});