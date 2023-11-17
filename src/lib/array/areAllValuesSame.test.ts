import { areAllValuesSame } from './areAllValuesSame';

describe('An empty array should return true', () => {
  const array1: any[] = [];

  it('Should return true', () => {
    expect(areAllValuesSame(array1)).toBe(true);
  });
});

describe('An array of 2`s', () => {
  const array1 = [2, 2];

  it('Should return true', () => {
    expect(areAllValuesSame(array1)).toBe(true);
  });
});

describe('An array of 1 and 2', () => {
  const array1 = [1, 2];

  it('Should return false', () => {
    expect(areAllValuesSame(array1)).toBe(false);
  });
});
