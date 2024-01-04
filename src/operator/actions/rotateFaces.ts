import { CubeRotationDirection, ICube } from '../..';
import { LAYERS } from '../../lib/layers';
import { Turn, TurnType } from '../types';

const t: Record<string, LAYERS> = Object.freeze({
  F: LAYERS.FRONT,
  R: LAYERS.RIGHT,
  U: LAYERS.TOP,
  L: LAYERS.LEFT,
  B: LAYERS.BACK,
  D: LAYERS.BOTTOM,
} as const);

export const regex = /^[FRULBD]'?2?/;
export const turntype = TurnType.OuterLayerRotation;
export function action(cube: ICube, turn: Turn){
  const hasDirection = turn.token.match(/[']/);
  const numberOfTimes = turn.token.match(/[2]$/);
  const whichLayer: string = turn.token[0];
  const direction = !hasDirection
    ? CubeRotationDirection.ClockWise
    : CubeRotationDirection.AntiClockWise;

  cube.rotateLayer(t[whichLayer], direction, numberOfTimes && 2);
}
