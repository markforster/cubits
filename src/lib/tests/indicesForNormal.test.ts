import { newCubeState } from '../factory';
import { indicesForNormal, compareArray } from '..';
import { Vertex } from '../../cube/lib';
import { CubeState } from '../../cube';

const TOP_indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const BOTTOM_indices = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const FRONT_indices = [18, 19, 20, 21, 22, 23, 24, 25, 26];
const BACK_indices = [27, 28, 29, 30, 31, 32, 33, 34, 35];
const LEFT_indices = [36, 37, 38, 39, 40, 41, 42, 43, 44];
const RIGHT_indices = [45, 46, 47, 48, 49, 50, 51, 52, 53];

const TOP_VERTEX: Vertex = [0, 2, 0];
const BOTTOM_VERTEX: Vertex = [0, -2, 0];
const FRONT_VERTEX: Vertex = [0, 0, -2];
const BACK_VERTEX: Vertex = [0, 0, 2];
const LEFT_VERTEX: Vertex = [-2, 0, 0];
const RIGHT_VERTEX: Vertex = [2, 0, 0];

describe('indicesFormNormal should return indices that match the normal', () => {
  const cubeState: CubeState = newCubeState();

  it(`The indices for vertex [${TOP_VERTEX}] should match the TOP indices`, () => {
    const indices: number[] = indicesForNormal(cubeState, TOP_VERTEX);

    expect(compareArray(indices, TOP_indices)).toBe(true);
  });

  it(`The indices for vertex [${BOTTOM_VERTEX}] should match the BOTTOM indices`, () => {
    const indices: number[] = indicesForNormal(cubeState, BOTTOM_VERTEX);

    expect(compareArray(indices, BOTTOM_indices)).toBe(true);
  });

  it(`The indices for vertex [${FRONT_VERTEX}] should match the FRONT indices`, () => {
    const indices: number[] = indicesForNormal(cubeState, FRONT_VERTEX);

    expect(compareArray(indices, FRONT_indices)).toBe(true);
  });

  it(`The indices for vertex [${BACK_VERTEX}] should match the BACK indices`, () => {
    const indices: number[] = indicesForNormal(cubeState, BACK_VERTEX);

    expect(compareArray(indices, BACK_indices)).toBe(true);
  });

  it(`The indices for vertex [${LEFT_VERTEX}] should match the LEFT indices`, () => {
    const indices: number[] = indicesForNormal(cubeState, LEFT_VERTEX);

    expect(compareArray(indices, LEFT_indices)).toBe(true);
  });

  it(`The indices for vertex [${RIGHT_VERTEX}] should match the RIGHT indices`, () => {
    const indices: number[] = indicesForNormal(cubeState, RIGHT_VERTEX);

    expect(compareArray(indices, RIGHT_indices)).toBe(true);
  });
});
