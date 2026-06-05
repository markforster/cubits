import { CubeState } from '../cube/state';
import { Vertex } from '../cube/lib';
import { rotate3DPoints } from './rotation';
import { toRadians } from './toRadians';

export const rotateVectorsAtindices = (
  cubeState: CubeState,
  indices: number[],
  angle: number,
  axis: Vertex,
) => {
  const rads = toRadians(angle);

  const points = indices.map((ind: number) => cubeState[ind][0]);
  const normals = indices.map((ind: number) => cubeState[ind][1]);

  const p: Vertex[] = rotate3DPoints(points, axis, rads);
  const n: Vertex[] = rotate3DPoints(normals, axis, rads);

  for (let i = 0; i < indices.length; i++) {
    cubeState[indices[i]][0] = p[i];
    cubeState[indices[i]][1] = n[i];
  }
};
