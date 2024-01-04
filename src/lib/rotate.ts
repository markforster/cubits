import { AxisVertex as _AxisVertex } from '.';
import { Vertex } from '../cube/lib';

export { LAYERS as Layer } from './layers';

export enum Axis {
  X,
  Y,
  Z,
}

export const AxisToVertex: Record<string, Vertex> = Object.freeze({
  X: _AxisVertex.PITCH as Vertex,
  Y: _AxisVertex.YAW as Vertex,
  Z: _AxisVertex.ROLL as Vertex,
} as const);
