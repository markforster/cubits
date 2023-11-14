import { isCenter } from '..';
import { CubeState } from '../../cube';
import { newCubeState } from '../factory';

describe('isCenter should be able to determine wether a vector is a center piece', () => {
  const cubeState: CubeState = newCubeState();

  describe('Cubestate known corners', () => {
    it('The corner [ -1,  1, -1] should NOT be a center piece', () => {
      expect(isCenter(cubeState[0])).toBe(false);
    });

    it('The corner [  1,  1, -1] should NOT be a center piece', () => {
      expect(isCenter(cubeState[2])).toBe(false);
    });

    it('The corner [ -1,  1,  1] should NOT be a center piece', () => {
      expect(isCenter(cubeState[6])).toBe(false);
    });

    it('The corner [  1,  1,  1] should NOT be a center piece', () => {
      expect(isCenter(cubeState[8])).toBe(false);
    });
  });

  describe('Cubestate known edges', () => {
    it('The edge [  0,  1, -1] should NOT be a center piece', () => {
      expect(isCenter(cubeState[1])).toBe(false);
    });

    it('The edge [ -1,  1,  0] should NOT be a center piece', () => {
      expect(isCenter(cubeState[3])).toBe(false);
    });

    it('The edge [  1,  1,  0] should NOT be a center piece', () => {
      expect(isCenter(cubeState[5])).toBe(false);
    });

    it('The edge [  1,  1,  1] should NOT be a center piece', () => {
      expect(isCenter(cubeState[7])).toBe(false);
    });
  });

  describe('Cubestate known centers', () => {
    it('A center piece SHOULD be a center piece', () => {
      expect(isCenter(cubeState[4])).toBe(true);
    });
  });
});
