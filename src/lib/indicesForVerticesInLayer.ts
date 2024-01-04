import { PrimaryUnit } from '.';
import { CubeState } from '../cube';
import { Vertex, Vector } from '../cube/lib';
import { primaryUnit } from './primaryUnit';

/**
 * Returns an array of indices representing the vertices within the specified layer of the Rubiks Cube.
 * @param {CubeState} cubeState - The state of the Rubiks Cube represented as an array of vectors.
 * @param {Vertex} layer - The 3D coordinates representing the layer in the format [x, y, z].
 * @returns {number[]} An array of indices representing the vertices within the specified layer.
 * @remarks This function takes the state of the Rubiks Cube and the 3D coordinates of a layer as input.
 * It finds and returns an array of indices corresponding to the vertices that lie within the specified layer.
 * The layer's primary unit is determined using the `primaryUnit` function.
 * The function filters the cubeState array based on the matching primary unit's coordinate value and layer coordinate value.
 * @example
 * const cubeState = [
 *   [[0, 1, 0], [0, 1, 1]], // Vector 0
 *   [[0, 1, 0], [0, 0, 1]], // Vector 1
 *   [[0, 0, 0], [0, 1, 0]], // Vector 2
 *   [[0, 0, 1], [0, 0, 1]], // Vector 3
 * ];
 * const layer = [0, 1, 0];
 * const indices = indicesForverticesInLayer(cubeState, layer);
 * console.log(indices); // Output: [0, 2]
 */
// TODO: This is no longer needed and has been superceded by indicesForvertices
export const indicesForverticesInLayer = (
  cubeState: CubeState,
  layer: Vertex,
): number[] => {
  const primaryUnitLayer: PrimaryUnit = primaryUnit(layer);

  return cubeState
    .map((_, i: number) => i)
    .filter((i: number) => {
      const vector: Vector = cubeState[i];
      return vector[0][primaryUnitLayer[0]] === layer[primaryUnitLayer[0]];
    });
};
