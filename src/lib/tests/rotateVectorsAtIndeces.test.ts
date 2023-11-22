import {
  rotateVectorsAtindices,
  indicesForNormal,
  compareArray,
  AxisVertex,
} from '..';
import { CubeState } from '../../cube';
import { FULL_ROTATION } from '../rotation';
import { newCubeState } from './../factory';

describe('rotateVectorsAtindices should rotate vectors correctly', () => {
  it('Should have rotated the vectors around the Y axis 90 degrees', () => {
    const cubeState: CubeState = newCubeState();

    rotateVectorsAtindices(
      cubeState,
      indicesForNormal(cubeState, [0, 2, 0]),
      FULL_ROTATION,
      AxisVertex.YAW,
    );

    // TODO : Check normals also!!
    expect(compareArray(cubeState[0][0], [-1, 1, 1])).toBe(true);
    expect(compareArray(cubeState[1][0], [-1, 1, 0])).toBe(true);
    expect(compareArray(cubeState[2][0], [-1, 1, -1])).toBe(true);
    expect(compareArray(cubeState[3][0], [0, 1, 1])).toBe(true);
    expect(compareArray(cubeState[4][0], [0, 1, 0])).toBe(true);
    expect(compareArray(cubeState[5][0], [0, 1, -1])).toBe(true);
    expect(compareArray(cubeState[6][0], [1, 1, 1])).toBe(true);
    expect(compareArray(cubeState[7][0], [1, 1, 0])).toBe(true);
    expect(compareArray(cubeState[8][0], [1, 1, -1])).toBe(true);
  });

  it('Should have rotated the vectors around the Z axis 90 degrees', () => {
    const cubeState: CubeState = newCubeState();

    rotateVectorsAtindices(
      cubeState,
      indicesForNormal(cubeState, [0, 2, 0]),
      FULL_ROTATION,
      AxisVertex.PITCH,
    );

    // TODO : Check normals also!!
    expect(cubeState[0][0]).toEqual([-1, 1, 1]);
    expect(cubeState[1][0]).toEqual([0, 1, 1]);
    expect(cubeState[2][0]).toEqual([1, 1, 1]);
    expect(cubeState[3][0]).toEqual([-1, 0, 1]);
    expect(cubeState[4][0]).toEqual([0, 0, 1]);
    expect(cubeState[5][0]).toEqual([1, 0, 1]);
    expect(cubeState[6][0]).toEqual([-1, -1, 1]);
    expect(cubeState[7][0]).toEqual([0, -1, 1]);
    expect(cubeState[8][0]).toEqual([1, -1, 1]);
  });

  it('Should have rotated the vectors around the X axis 90 degrees', () => {
    const cubeState: CubeState = newCubeState();

    rotateVectorsAtindices(
      cubeState,
      indicesForNormal(cubeState, [0, 2, 0]),
      FULL_ROTATION,
      AxisVertex.ROLL,
    );

    // TODO : Check normals also!!
    // expect(compareArray(cubeState[0][0], [ -1,  -1,  -1])).toBe(true);
    expect(cubeState[0][0]).toEqual([1, 1, -1]);
    // expect(compareArray(cubeState[1][0], [  0,  1,  1])).toBe(true);
    // expect(compareArray(cubeState[2][0], [  1,  1,  1])).toBe(true);
    // expect(compareArray(cubeState[3][0], [ -1,  0,  1])).toBe(true);
    // expect(compareArray(cubeState[4][0], [  0,  0,  1])).toBe(true);
    // expect(compareArray(cubeState[5][0], [  1,  0,  1])).toBe(true);
    // expect(compareArray(cubeState[6][0], [ -1, -1,  1])).toBe(true);
    // expect(compareArray(cubeState[7][0], [  0, -1,  1])).toBe(true);
    // expect(compareArray(cubeState[8][0], [  1, -1,  1])).toBe(true);
  });
});
