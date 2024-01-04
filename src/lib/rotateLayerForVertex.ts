import { CubeState } from '../cube';
import { Vertex, RotationAngle } from '../cube/lib';
import { rotateVectorsAtindices } from '.';
import { indicesForverticesInLayer } from './indicesForVerticesInLayer';
// import { indicesForvertices } from './indicesForvertices';

export const rotateLayerForVertex = (
  cubeState: CubeState,
  vertex: Vertex,
  rotationAxis: Vertex,
  angle: RotationAngle,
) => {
  // TODO: Should use indicesForvertices!!! indicesForverticesInLayer is deprecated
  const indices: number[] = indicesForverticesInLayer(cubeState, vertex);
  // const indices: number[] = indicesForvertices(cubeState, vertex);
  rotateVectorsAtindices(cubeState, indices, angle, rotationAxis);
};
