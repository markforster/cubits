import { PrimaryUnit } from '.';
import { CubeState } from '../cube';
import { Vertex, Vector } from '../cube/lib';

import { primaryUnit } from './primaryUnit';

/**
 * Finds the indices of cube faces that match the given normal vector.
 * @param cubeState - The CubeState representing the cube's current state.
 * @param vector - The normal vector (Vertex) to be matched.
 * @returns An array of indices (numbers) of cube faces that have the same normal vector.
 */
export const indicesForNormal = (
  cubeState: CubeState,
  vector: Vertex,
): number[] => {
  // Find the primary unit of the given normal vector.
  const pu: PrimaryUnit = primaryUnit(vector);

  // Map the indices of cubeState and filter the ones with the same primary unit as the vector.
  const matchingIndices = cubeState
    .map((_v: Vector, i: number) => i)
    .filter((i: number) => cubeState[i][1][pu[0]] === pu[1]);

  return matchingIndices;
};
