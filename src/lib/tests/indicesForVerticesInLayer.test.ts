/*
  Note : The test is dependent on the indices of the vectors being in a specific order as follows:
  
*/

import { newCubeState } from '../factory';
import { CubeState } from '../../cube';
import { Vertex } from '../../cube/lib';
import { indicesForverticesInLayer } from '../indicesForVerticesInLayer';

const TOP_LAYER_indices = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 27, 28, 29, 36, 37, 38, 45, 46, 47,
];
const TOP_LAYER_VERTEX: Vertex = [0, 1, 0];

const BOTTOM_LAYER_indices = [
  9, 10, 11, 12, 13, 14, 15, 16, 17, 24, 25, 26, 33, 34, 35, 42, 43, 44, 51, 52,
  53,
];
const BOTTOM_LAYER_VERTEX: Vertex = [0, -1, 0];

describe('indicesForverticesInLayer should return indices that match the layer vertex', () => {
  const cubeState: CubeState = newCubeState();

  it(`The indices for vertex [${TOP_LAYER_VERTEX}] (Top Layer) should match the Top indices`, () => {
    const indices: number[] = indicesForverticesInLayer(
      cubeState,
      TOP_LAYER_VERTEX,
    );

    expect(indices).toEqual(TOP_LAYER_indices);
  });

  it(`The indices for vertex [${BOTTOM_LAYER_VERTEX}] (Bottom Layer) should match the Bottom indices`, () => {
    const indices: number[] = indicesForverticesInLayer(
      cubeState,
      BOTTOM_LAYER_VERTEX,
    );

    expect(indices).toEqual(BOTTOM_LAYER_indices);
  });
});
