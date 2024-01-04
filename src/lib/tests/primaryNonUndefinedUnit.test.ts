import { primaryNonUndefinedUnit } from '../primaryNonUndefinedUnit';

describe('Determining the non undefined primary units of a vertex', () => {
  it('Should receive [0, 0] when accepting a vertex [0, undefined, undefined]', () => {
    expect(primaryNonUndefinedUnit([0, undefined, undefined])).toEqual([0, 0]);
  });

  it('Should receive [1, 0] when accepting a vertex [undefined, 0, undefined]', () => {
    expect(primaryNonUndefinedUnit([undefined, 0, undefined])).toEqual([1, 0]);
  });

  it('Should receive [2, 0] when accepting a vertex [undefined, undefined, 0]', () => {
    expect(primaryNonUndefinedUnit([undefined, undefined, 0])).toEqual([2, 0]);
  });

  it('Should receive [0, 1] when accepting a vertex [undefined, undefined, 1]', () => {
    expect(primaryNonUndefinedUnit([1, undefined, undefined])).toEqual([0, 1]);
  });

  it('Should receive [1, 1] when accepting a vertex [undefined, 1, undefined]', () => {
    expect(primaryNonUndefinedUnit([undefined, 1, undefined])).toEqual([1, 1]);
  });

  it('Should receive [2, 1] when accepting a vertex [undefined, undefined, 1]', () => {
    expect(primaryNonUndefinedUnit([undefined, undefined, 1])).toEqual([2, 1]);
  });

  it('Should receive [0, 0] when accepting a vertex [0, 0, 0]', () => {
    expect(primaryNonUndefinedUnit([0, 0, 0])).toEqual([0, 0]);
  });

  it('Should receive [0, undefined] when accepting a vertex [undefined, undefined, undefined]', () => {
    const U: any = undefined;
    expect(primaryNonUndefinedUnit([U, U, U])).toEqual([0, undefined]);
  });
});
