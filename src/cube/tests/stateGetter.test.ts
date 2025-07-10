import { Cube } from '../..';
import { newCubeState } from '../../lib/factory';

describe('Cube state getter', () => {
  it('should return a deep copy of the cube state', () => {
    const cube = new Cube(newCubeState());
    const first = cube.state;
    const second = cube.state;

    expect(first).not.toBe(second);
    expect(first[0]).not.toBe(second[0]);
    expect(first[0][0]).not.toBe(second[0][0]);
  });

  it('modifying the returned state should not mutate the cube', () => {
    const cube = new Cube(newCubeState());
    const copy = cube.state;
    copy[0][0][0] = 99;
    expect(cube.state[0][0][0]).not.toBe(99);
  });
});
