import { CubeRotationDirection, ICube } from '../..';
import { LAYERS } from '../../lib/layers';
import { Turn, TurnType } from '../types';

const t: Record<string, LAYERS> = Object.freeze({
  M: LAYERS.MIDDLE,
  E: LAYERS.EQUATOR,
  S: LAYERS.STANDING,
} as const);

export const regex = /^[MES]'?[2]?/;
export const turntype = TurnType.InnerLayerRotation;
export function action(cube: ICube, turn: Turn) {
  const hasDirection = turn.token.match(/[']/);
  const numberOfTimes = turn.token.match(/[2]$/);
  const whichLayer: string = turn.token[0];
  const direction = !hasDirection
    ? CubeRotationDirection.ClockWise
    : CubeRotationDirection.AntiClockWise;

  cube.rotateLayer(t[whichLayer], direction, numberOfTimes && 2);
}
