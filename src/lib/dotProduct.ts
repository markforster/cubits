import { Vertex } from '../cube/lib';

export const dotProduct = (a: Vertex, b: Vertex): number => {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
