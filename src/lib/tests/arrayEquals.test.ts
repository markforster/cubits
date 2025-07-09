import { arrayEquals } from '..';

describe('arrayEquals should compare arrays correctly', () => {
  it('returns true when the values in both arrays match', () => {
    expect(arrayEquals([0, 1, 2], [0, 1, 2])).toBe(true);
  });

  it('returns false when the values in both arrays do not match', () => {
    expect(arrayEquals([1, 2, 3], [0, 2, 2])).toBe(false);
  });

  it('returns false when array lengths do not match', () => {
    expect(arrayEquals([1, 2, 3], [2, 2])).toBe(false);
  });
});
