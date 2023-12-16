import { Vertex } from '../cube/lib';

// export const vectorMagnitude = (v: number[]): number => {
export const vectorMagnitude = (v: Vertex): number => {
  return Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
};
