const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 8 + 7 to equal 15', () => {
    expect(sum(8, 7)).toBe(15);
});