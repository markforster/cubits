import { Cube, CubeRotationDirection, newCubeState } from '../../..';
import { CubeState } from '../../../cube';
import { ICube } from '../../../cube/ICube';
import { LAYERS } from '../../../lib/layers';
import { Axis } from '../../../lib/rotate';
import { Turn } from '../../types';
import { action, turntype } from '../rotateAll';

describe('Rotating All action', () => {
  let cubeState: CubeState;
  let cube: ICube;
  let spy: jest.SpyInstance;

  beforeAll(() => {
    cubeState = newCubeState();
    cube = new Cube(cubeState);

    spy = jest.spyOn(cube, 'rotate');
  });

  describe('Rotating by axis X clockwise once', () => {
    const turn: Turn = { token: 'X', turnType: turntype };

    beforeAll(() => {
      action(cube, turn);
    });

    it('Should pass an X axis, clockwise direction once', () => {
      expect(spy).toHaveBeenCalledWith(
        Axis.X,
        CubeRotationDirection.ClockWise,
        null,
      );
    });
  });

  describe('Rotating by axis X clockwise twice', () => {
    const turn: Turn = { token: 'X2', turnType: turntype };

    beforeAll(() => {
      action(cube, turn);
    });

    it('Should pass an X axis, clockwise direction twice', () => {
      expect(spy).toHaveBeenCalledWith(
        Axis.X,
        CubeRotationDirection.ClockWise,
        2,
      );
    });
  });

  describe('Rotating by X axis antclockwise once', () => {
    const turn: Turn = { token: "X'", turnType: turntype };

    beforeAll(() => {
      action(cube, turn);
    });

    it('Should pass an Axis X, anticlockwise direction once', () => {
      expect(spy).toHaveBeenCalledWith(
        Axis.X,
        CubeRotationDirection.AntiClockWise,
        null,
      );
    });
  });
});
