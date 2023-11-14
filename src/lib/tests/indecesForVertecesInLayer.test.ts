/*
  Note : The test is dependent on the indeces of the vectors being in a specific order as follows:
  
*/

import { newCubeState } from '../factory';
import { indecesForVertecesInLayer, compareArray } from '..';
import { CubeState } from '../../cube';
import { Vertex } from '../../cube/lib';

const TOP_LAYER_INDECES = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 27, 28, 29, 36, 37, 38, 45, 46, 47,
];
const TOP_LAYER_VERTEX: Vertex = [0, 1, 0];

const BOTTOM_LAYER_INDECES = [
  9, 10, 11, 12, 13, 14, 15, 16, 17, 24, 25, 26, 33, 34, 35, 42, 43, 44, 51, 52,
  53,
];
const BOTTOM_LAYER_VERTEX: Vertex = [0, -1, 0];

describe('indecesForVertecesInLayer should return indeces that match the layer vertex', () => {
  const cubeState: CubeState = newCubeState();

  it(`The indeces for vertex [${TOP_LAYER_VERTEX}] (Top Layer) should match the Top indeces`, () => {
    const indeces: number[] = indecesForVertecesInLayer(
      cubeState,
      TOP_LAYER_VERTEX,
    );

    expect(compareArray(indeces, TOP_LAYER_INDECES)).toBe(true);
  });

  it(`The indeces for vertex [${BOTTOM_LAYER_VERTEX}] (Bottom Layer) should match the Bottom indeces`, () => {
    const indeces: number[] = indecesForVertecesInLayer(
      cubeState,
      BOTTOM_LAYER_VERTEX,
    );

    expect(compareArray(indeces, BOTTOM_LAYER_INDECES)).toBe(true);
  });
});
