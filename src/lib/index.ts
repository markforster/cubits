import { rotate3DPoints } from './rotation';
import { toRadians } from './toRadians';
import { Vertex } from '../cube/lib';
import { CubeState } from '../cube';

export type PrimaryUnit = [number | null, number];

const PITCH = [1, 0, 0]; //  Up and Down around its lateral axis
const YAW = [0, 1, 0]; //  Left and Right around the normal (vertical axis)
const ROLL = [0, 0, -1]; //  Left and Right around longitudinal axis!!

export const AxisVertex: Record<string, Vertex> = Object.freeze({
  PITCH: PITCH as Vertex,
  YAW: YAW as Vertex,
  ROLL: ROLL as Vertex,
} as const);

export const LayersVertex: Record<string, Vertex> = Object.freeze({
  TOP: [0, 1, 0] as Vertex,
  BOTTOM: [0, -1, 0] as Vertex,
  FRONT: [0, 0, -1] as Vertex,
  BACK: [0, 0, 1] as Vertex,
  LEFT: [-1, 0, 0] as Vertex,
  RIGHT: [1, 0, 0] as Vertex,
  // Add more matrices as needed
} as const);

export const NormlasVertex: Record<string, Vertex> = Object.freeze({
  TOP: [0, 2, 0] as Vertex,
  BOTTOM: [0, -2, 0] as Vertex,
  FRONT: [0, 0, -2] as Vertex,
  BACK: [0, 0, 2] as Vertex,
  LEFT: [-2, 0, 0] as Vertex,
  RIGHT: [2, 0, 0] as Vertex,
  // Add more matrices as needed
} as const);

export { compareArray } from './compareArray';

// export { colourForIndex } from "./colourForIndex";

export { countNonZeroElements as zeroCount } from './countNonZeroElements';

export { isCorner } from './isCorner';

export { isEdge } from './isEdge';

export { isCenter } from './isCenter';

// export { primaryUnit } from "./primaryUnit";

export { indicesForNormal } from './indicesForNormal';

// This can help us get all vectors of a cube layer
/*
  Goal : Get the indices of all vertices that are on the same layer

  1) Get the primary unit. [ 0, 1, 0 ] would be all that are in the top layer
  2) Get all vectors that share this primary unit!
  3) we should have the indices!
*/
// export { indicesForverticesInLayer } from './indicesForverticesInLayer';

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
