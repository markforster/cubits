import { KeysForEnum, ValuesForEnum } from '../enums';

enum ABC {
  A = 0,
  B = 1,
  C = 2,
}

enum PQRS {
  P = 12,
  Q = 28,
  R = 123,
  S = 883,
}

enum XYZ {
  X = 'x',
  Y = 'y',
  Z = 'z',
}

describe('Getting the values an enum', () => {
  it(`Should return ['A', 'B', 'C'] for the enum ABC`, () => {
    expect(KeysForEnum(ABC)).toEqual(['A', 'B', 'C']);
  });

  it(`Should return ['P', 'Q', 'R', 'S'] for the enum PQRS`, () => {
    expect(KeysForEnum(PQRS)).toEqual(['P', 'Q', 'R', 'S']);
  });

  it(`Should return [] for the enum XYZ (as the enum is not numerical!!)`, () => {
    expect(KeysForEnum(XYZ)).toEqual([]);
  });
});

describe('Getting the values of an enum', () => {
  it(`Should return [0, 1, 2] for the enum ABC`, () => {
    expect(ValuesForEnum(ABC)).toEqual([0, 1, 2]);
  });

  it(`Should return [12, 28, 123, 883] for the enum PQRS`, () => {
    expect(ValuesForEnum(PQRS)).toEqual([12, 28, 123, 883]);
  });

  it(`Should return ['x', 'y', 'z'] for the enum XYZ`, () => {
    expect(ValuesForEnum(XYZ)).toEqual(['x', 'y', 'z']);
  });
});
