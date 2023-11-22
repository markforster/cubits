import { CubeState } from '../cube';
import { Vertex, RotationAngle } from '../cube/lib';
import { rotateVectorsAtindices } from '.';
import { indicesForVertecesInLayer } from './indicesForVertecesInLayer';

export const rotateLayerForVertex = (
  cubeState: CubeState,
  vertex: Vertex,
  rotationAxis: Vertex,
  angle: RotationAngle,
) => {
  const indices: number[] = indicesForVertecesInLayer(cubeState, vertex);
  rotateVectorsAtindices(cubeState, indices, angle, rotationAxis);
};
