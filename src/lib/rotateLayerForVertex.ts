import { CubeState } from '../cube';
import { Vertex, RotationAngle } from '../cube/lib';
import { rotateVectorsAtIndeces } from '.';
import { indecesForVertecesInLayer } from './indecesForVertecesInLayer';

export const rotateLayerForVertex = (
  cubeState: CubeState,
  vertex: Vertex,
  rotationAxis: Vertex,
  angle: RotationAngle,
) => {
  const indeces: number[] = indecesForVertecesInLayer(cubeState, vertex);
  rotateVectorsAtIndeces(cubeState, indeces, angle, rotationAxis);
};
