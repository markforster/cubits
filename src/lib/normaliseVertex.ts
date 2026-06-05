import { Vertex } from '../cube/lib';

export const normaliseVertex = (vertex: Vertex): Vertex => {
  return vertex.map((v: number) => Math.abs(v)) as Vertex;
};
