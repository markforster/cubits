import { isCorner } from '..';
import { CubeState } from '../../cube';
import { newCubeState } from '../factory';

describe('isCorner should be able to determine wether a vector is a corner piece', () => {
  const cubeState: CubeState = newCubeState();

  describe('Cubestate known corners', () => {
    it('The corner [ -1,  1, -1] SHOULD be a corner piece', () => {
      expect(isCorner(cubeState[0])).toBe(true);
    });

    it('The corner [  1,  1, -1] SHOULD be a corner piece', () => {
      expect(isCorner(cubeState[2])).toBe(true);
    });

    it('The corner [ -1,  1,  1] SHOULD be a corner piece', () => {
      expect(isCorner(cubeState[6])).toBe(true);
    });

    it('The corner [  1,  1,  1] SHOULD be a corner piece', () => {
      expect(isCorner(cubeState[8])).toBe(true);
    });
  });

  describe('Cubestate known edges', () => {
    it('The edge [  0,  1, -1] should NOT be a corner piece', () => {
      expect(isCorner(cubeState[1])).toBe(false);
    });

    it('The edge [ -1,  1,  0] should NOT be a corner piece', () => {
      expect(isCorner(cubeState[3])).toBe(false);
    });

    it('The edge [  1,  1,  0] should NOT be a corner piece', () => {
      expect(isCorner(cubeState[5])).toBe(false);
    });

    it('The edge [  1,  1,  1] should NOT be a corner piece', () => {
      expect(isCorner(cubeState[7])).toBe(false);
    });
  });

  describe('Cubestate known centers', () => {
    it('a corner piece should NOT be a corner piece', () => {
      expect(isCorner(cubeState[4])).toBe(false);
    });
  });
});
