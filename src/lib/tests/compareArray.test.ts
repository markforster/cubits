import { compareArray } from '..';

describe('compareArray should return compare arrays and return true or false', () => {
  it('should return true when the values in both arrays match', () => {
    expect(compareArray([0, 1, 2], [0, 1, 2])).toBe(true);
  });

  it('should return false when the values in both arrays do not match', () => {
    expect(compareArray([1, 2, 3], [0, 2, 2])).toBe(false);
  });

  it('should throw an exception when array lengths do not match', () => {
    expect(() => {
      compareArray([1, 2, 3], [2, 2]);
    }).toThrowError();
  });
});
