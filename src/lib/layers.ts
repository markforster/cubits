import { Vertex } from '..';

export enum LAYERS {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
  FRONT,
  BACK,
  MIDDLE,
  EQUATOR,
  STANDING,
}

export const VertexForLayer: Record<string, Vertex> = Object.freeze({
  [LAYERS.TOP]: [undefined, 1, undefined] as Vertex,
  [LAYERS.BOTTOM]: [undefined, -1, undefined] as Vertex,
  [LAYERS.LEFT]: [-1, undefined, undefined] as Vertex,
  [LAYERS.RIGHT]: [1, undefined, undefined] as Vertex,
  [LAYERS.FRONT]: [undefined, undefined, -1] as Vertex,
  [LAYERS.BACK]: [undefined, undefined, 1] as Vertex,
  [LAYERS.MIDDLE]: [0, undefined, undefined] as Vertex,
  [LAYERS.EQUATOR]: [undefined, 0, undefined] as Vertex,
  [LAYERS.STANDING]: [undefined, undefined, 0] as Vertex,
} as const);
