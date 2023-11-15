import { isEdge } from '..';
import { CubeState } from '../../cube';
import { newCubeState } from '../factory';

describe('isEdge should be able to determine wether a vector is a edge piece', () => {
  const cubeState: CubeState = newCubeState();

  describe('Cubestate known corners', () => {
    it('The corner [ -1,  1, -1] should NOT be a center piece', () => {
      expect(isEdge(cubeState[0])).toBe(false);
    });

    it('The corner [  1,  1, -1] should NOT be a center piece', () => {
      expect(isEdge(cubeState[2])).toBe(false);
    });

    it('The corner [ -1,  1,  1] should NOT be a center piece', () => {
      expect(isEdge(cubeState[6])).toBe(false);
    });

    it('The corner [  1,  1,  1] should NOT be a center piece', () => {
      expect(isEdge(cubeState[8])).toBe(false);
    });
  });

  describe('Cubestate known edges', () => {
    it('The edge [  0,  1, -1] SHOULD be a edge piece', () => {
      expect(isEdge(cubeState[1])).toBe(true);
    });

    it('The edge [ -1,  1,  0] SHOULD be a edge piece', () => {
      expect(isEdge(cubeState[3])).toBe(true);
    });

    it('The edge [  1,  1,  0] SHOULD be a edge piece', () => {
      expect(isEdge(cubeState[5])).toBe(true);
    });

    it('The edge [  1,  1,  1] SHOULD be a edge piece', () => {
      expect(isEdge(cubeState[7])).toBe(true);
    });
  });

  describe('Cubestate known centers', () => {
    it('A center piece should NOT be a edge piece', () => {
      expect(isEdge(cubeState[4])).toBe(false);
    });
  });
});
