import { Cube, CubeRotationDirection, newCubeState } from '../../..';
import { CubeState } from '../../../cube';
import { ICube } from '../../../cube/ICube';
import { LAYERS } from '../../../lib/layers';
import { Turn } from '../../types';
import { action, turntype } from '../rotateFaces';

describe('Rotating Faces action', () => {
  let cubeState: CubeState;
  let cube: ICube;
  let spy: jest.SpyInstance;

  beforeAll(() => {
    cubeState = newCubeState();
    cube = new Cube(cubeState);

    spy = jest.spyOn(cube, 'rotateLayer');
  });

  describe('Rotating a top face clockwise once', () => {
    const turn: Turn = { token: 'U', turnType: turntype };

    beforeAll(() => {
      action(cube, turn);
    });

    it('Should pass an TOP layer, clockwise direction once', () => {
      expect(spy).toHaveBeenCalledWith(
        LAYERS.TOP,
        CubeRotationDirection.ClockWise,
        null,
      );
    });
  });

  describe('Rotating a middle section clockwise twice', () => {
    const turn: Turn = { token: 'U2', turnType: turntype };

    beforeAll(() => {
      action(cube, turn);
    });

    it('Should pass an Top layer, clockwise direction twice', () => {
      expect(spy).toHaveBeenCalledWith(
        LAYERS.TOP,
        CubeRotationDirection.ClockWise,
        2,
      );
    });
  });

  describe('Rotating a middle section antclockwise once', () => {
    const turn: Turn = { token: "U'", turnType: turntype };

    beforeAll(() => {
      action(cube, turn);
    });

    it('Should pass an Top layer, anticlockwise direction once', () => {
      expect(spy).toHaveBeenCalledWith(
        LAYERS.TOP,
        CubeRotationDirection.AntiClockWise,
        null,
      );
    });
  });
});
