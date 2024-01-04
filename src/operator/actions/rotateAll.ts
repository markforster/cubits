import { CubeRotationDirection } from '../..';
import { ICube } from '../../cube/ICube';
import { ValuesForEnum, KeysForEnum } from '../../lib/enums';
import { Axis } from '../../lib/rotate';
import { Turn, TurnType } from '../types';

export const regex = /^[XYZ]'?[2]?/;
export const turntype = TurnType.CubeRotation;
export function action(cube: ICube, turn: Turn) {
  const hasDirection = turn.token.match(/[']/);
  const numberOfTimes = turn.token.match(/2$/);
  const whichAxis: string = turn.token[0];
  const direction = !hasDirection
    ? CubeRotationDirection.ClockWise
    : CubeRotationDirection.AntiClockWise;

  const finalAxis: Axis =
    ValuesForEnum(Axis)[KeysForEnum(Axis).findIndex((e) => e === whichAxis)];

  cube.rotate(finalAxis, direction, numberOfTimes && 2);
}
