import { Vertex } from '../cube/lib';

const PITCH = [1, 0, 0];
const YAW = [0, 1, 0];
const ROLL = [0, 0, -1];
const ALL = [1, 1, -1];

export const AxisVertex: Record<string, Vertex> = Object.freeze({
  PITCH: PITCH as Vertex,
  YAW: YAW as Vertex,
  ROLL: ROLL as Vertex,
  ALL: ALL as Vertex,
} as const);

export const LayersVertex: Record<string, Vertex> = Object.freeze({
  TOP: [0, 1, 0] as Vertex,
  BOTTOM: [0, -1, 0] as Vertex,
  FRONT: [0, 0, -1] as Vertex,
  BACK: [0, 0, 1] as Vertex,
  LEFT: [-1, 0, 0] as Vertex,
  RIGHT: [1, 0, 0] as Vertex,
} as const);

export const NormalsVertex: Record<string, Vertex> = Object.freeze({
  TOP: [0, 2, 0] as Vertex,
  BOTTOM: [0, -2, 0] as Vertex,
  FRONT: [0, 0, -2] as Vertex,
  BACK: [0, 0, 2] as Vertex,
  LEFT: [-2, 0, 0] as Vertex,
  RIGHT: [2, 0, 0] as Vertex,
} as const);
