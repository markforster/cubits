import { Vertex } from '..';

export function crossProduct(vect_A: Vertex, vect_B: Vertex): Vertex {
  const cross_P: Vertex = [0, 0, 0] as Vertex;
  cross_P[0] = vect_A[1] * vect_B[2] - vect_A[2] * vect_B[1];
  cross_P[1] = vect_A[2] * vect_B[0] - vect_A[0] * vect_B[2];
  cross_P[2] = vect_A[0] * vect_B[1] - vect_A[1] * vect_B[0];

  return cross_P;
}