import { PrimaryUnit } from '.';
import { CubeState } from '../cube';
import { Vertex, Vector } from '../cube/lib';
import { primaryNonUndefinedUnit } from './primaryNonUndefinedUnit';

export const indicesForvertices = (
  cubeState: CubeState,
  layer: Vertex,
): number[] => {
  const primaryUnitLayer: PrimaryUnit = primaryNonUndefinedUnit(layer);

  return cubeState
    .map((_, i: number) => i)
    .filter((i: number) => {
      const vector: Vector = cubeState[i];
      return vector[0][primaryUnitLayer[0]] === layer[primaryUnitLayer[0]];
    });
};
