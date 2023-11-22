import { CubeState } from '../cube';
import { Vertex, RotationAngle } from '../cube/lib';
import { rotateVectorsAtindices } from '.';
import { indicesForverticesInLayer } from './indicesForVerticesInLayer';

export const rotateLayerForVertex = (
  cubeState: CubeState,
  vertex: Vertex,
  rotationAxis: Vertex,
  angle: RotationAngle,
) => {
  const indices: number[] = indicesForverticesInLayer(cubeState, vertex);
  rotateVectorsAtindices(cubeState, indices, angle, rotationAxis);
};
