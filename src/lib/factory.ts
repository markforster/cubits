/* istanbul ignore file */

import { CubeState } from '../cube/state';
import { Vertex, Vector } from '../cube/lib';

export const flattenCubeState = (state: CubeState): number[] => {
  return state.flat().flat();
};

export const buildCubeVectors = (): CubeState => {
  const state: Vector[] = [];

  const asc = [-1, 0, 1];
  const desc = [1, 0, -1];

  const pushFace = (
    axis: number,
    value: number,
    outer: number,
    inner: number,
    outerValues: number[],
  ) => {
    for (const o of outerValues) {
      for (const i of asc) {
        const pos: Vertex = [0, 0, 0];
        pos[axis] = value;
        pos[outer] = o;
        pos[inner] = i;
        const orient: Vertex = [...pos];
        orient[axis] = value * 2;
        state.push([pos, orient]);
      }
    }
  };

  // Top
  pushFace(1, 1, 2, 0, asc);
  // Bottom
  pushFace(1, -1, 2, 0, asc);
  // Front
  pushFace(2, -1, 1, 0, desc);
  // Back
  pushFace(2, 1, 1, 0, desc);
  // Left
  pushFace(0, -1, 1, 2, desc);
  // Right
  pushFace(0, 1, 1, 2, desc);

  return state as CubeState;
};

export const newCubeState = (): CubeState => {
  return buildCubeVectors();
};
