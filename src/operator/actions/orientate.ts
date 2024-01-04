import { ICube } from '../../cube/ICube';
import { Orientation } from '../../cube/lib';
import { LayersVertex } from '../../lib';
import { Turn, TurnType } from '../types';

const faceMapping: Record<string, any> = {
  u: Orientation.TOP,
  d: Orientation.BOTTOM,
  f: Orientation.FRONT,
  b: Orientation.BACK,
  l: Orientation.LEFT,
  r: Orientation.RIGHT,
};

const orientationMapping: Record<string, any> = {
  U: Orientation.TOP,
  D: Orientation.BOTTOM,
  F: Orientation.FRONT,
  B: Orientation.BACK,
  L: Orientation.LEFT,
  R: Orientation.RIGHT,
};

function orientationsForToken(token: string): [Orientation, Orientation] {
  if (!token) return [undefined, undefined];
  const sourceFace = token[0];
  const targetAxis = token[1];

  return [faceMapping[sourceFace], orientationMapping[targetAxis]];
}
export const regex = /^[frulbd][FRULBD]/;
export const turntype = TurnType.Orientation;
export function action(cube: ICube, turn: Turn, lastTurn?: Turn) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [sourceFaceL, targetAxisL] = orientationsForToken(lastTurn?.token);
  const [sourceFace, targetAxis] = orientationsForToken(turn.token);

  cube.orientate(sourceFace, targetAxis, targetAxisL);
}
