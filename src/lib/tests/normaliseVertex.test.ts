import { normaliseVertex } from '../normaliseVertex';

describe('Normalizing a vertex by converting values to their absolute values', () => {
  it(`Should convert all values in [0, 0, 0] to [0, 0, 0]`, () => {
    expect(normaliseVertex([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it(`Should convert all values in [0, 0, 1] to [0, 0, 1]`, () => {
    expect(normaliseVertex([0, 0, 1])).toEqual([0, 0, 1]);
  });

  it(`Should convert all values in [0, 0, -1] to [0, 0, 1]`, () => {
    expect(normaliseVertex([0, 0, -1])).toEqual([0, 0, 1]);
  });

  it(`Should convert all values in [-1, -1, -1] to [1, 1, 1]`, () => {
    expect(normaliseVertex([-1, -1, -1])).toEqual([1, 1, 1]);
  });

  it(`Should convert all values in [3, 4, 0] to [3, 4, 0]`, () => {
    expect(normaliseVertex([3, 4, 0])).toEqual([3, 4, 0]);
  });

  it(`Should convert all values in [0.5, 0.5, 0.5] to [0.5, 0.5, 0.5]`, () => {
    expect(normaliseVertex([0.5, 0.5, 0.5])).toEqual([0.5, 0.5, 0.5]);
  });

  it(`Should convert all values in [-0.1, -0.2, -0.3] to [0.1, 0.2, 0.3]`, () => {
    expect(normaliseVertex([-0.1, -0.2, -0.3])).toEqual([0.1, 0.2, 0.3]);
  });
});
