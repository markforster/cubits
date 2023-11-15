import { newCubeState } from '../factory';
import { indecesForNormal, compareArray } from '..';
import { Vertex } from '../../cube/lib';
import { CubeState } from '../../cube';

const TOP_INDECES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const BOTTOM_INDECES = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const FRONT_INDECES = [18, 19, 20, 21, 22, 23, 24, 25, 26];
const BACK_INDECES = [27, 28, 29, 30, 31, 32, 33, 34, 35];
const LEFT_INDECES = [36, 37, 38, 39, 40, 41, 42, 43, 44];
const RIGHT_INDECES = [45, 46, 47, 48, 49, 50, 51, 52, 53];

const TOP_VERTEX: Vertex = [0, 2, 0];
const BOTTOM_VERTEX: Vertex = [0, -2, 0];
const FRONT_VERTEX: Vertex = [0, 0, -2];
const BACK_VERTEX: Vertex = [0, 0, 2];
const LEFT_VERTEX: Vertex = [-2, 0, 0];
const RIGHT_VERTEX: Vertex = [2, 0, 0];

describe('indecesFormNormal should return indeces that match the normal', () => {
  const cubeState: CubeState = newCubeState();

  it(`The indeces for vertex [${TOP_VERTEX}] should match the TOP indeces`, () => {
    const indeces: number[] = indecesForNormal(cubeState, TOP_VERTEX);

    expect(compareArray(indeces, TOP_INDECES)).toBe(true);
  });

  it(`The indeces for vertex [${BOTTOM_VERTEX}] should match the BOTTOM indeces`, () => {
    const indeces: number[] = indecesForNormal(cubeState, BOTTOM_VERTEX);

    expect(compareArray(indeces, BOTTOM_INDECES)).toBe(true);
  });

  it(`The indeces for vertex [${FRONT_VERTEX}] should match the FRONT indeces`, () => {
    const indeces: number[] = indecesForNormal(cubeState, FRONT_VERTEX);

    expect(compareArray(indeces, FRONT_INDECES)).toBe(true);
  });

  it(`The indeces for vertex [${BACK_VERTEX}] should match the BACK indeces`, () => {
    const indeces: number[] = indecesForNormal(cubeState, BACK_VERTEX);

    expect(compareArray(indeces, BACK_INDECES)).toBe(true);
  });

  it(`The indeces for vertex [${LEFT_VERTEX}] should match the LEFT indeces`, () => {
    const indeces: number[] = indecesForNormal(cubeState, LEFT_VERTEX);

    expect(compareArray(indeces, LEFT_INDECES)).toBe(true);
  });

  it(`The indeces for vertex [${RIGHT_VERTEX}] should match the RIGHT indeces`, () => {
    const indeces: number[] = indecesForNormal(cubeState, RIGHT_VERTEX);

    expect(compareArray(indeces, RIGHT_INDECES)).toBe(true);
  });
});
