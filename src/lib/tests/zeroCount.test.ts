import { zeroCount } from '..';

describe('zeroCount should count the number of none zero numbers in an array', () => {
  it('[0, 0, 0] should be 0', () => {
    expect(zeroCount([0, 0, 0])).toBe(0);
  });

  it('[0, 0, 1] should be 1', () => {
    expect(zeroCount([0, 0, 1])).toBe(1);
  });

  it('[0, 1, 1] should be 2', () => {
    expect(zeroCount([0, 1, 1])).toBe(2);
  });

  it('[1, 1, 1] should be 2', () => {
    expect(zeroCount([1, 1, 1])).toBe(3);
  });
});
