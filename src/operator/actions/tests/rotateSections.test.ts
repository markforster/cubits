import { Cube, CubeRotationDirection, newCubeState } from '../../..';
import { CubeState } from '../../../cube';
import { ICube } from '../../../cube/ICube';
import { LAYERS } from '../../../lib/layers';
import { Turn } from '../../types';
import { action, turntype } from './../rotateSections';

describe('Rotating Section action', () => {
  let cubeState: CubeState;
  let cube: ICube;
  let spy: jest.SpyInstance;

  beforeAll(() => {
    cubeState = newCubeState();
    cube = new Cube(cubeState);

    spy = jest.spyOn(cube, 'rotateLayer');
  });

  describe('Rotating a middle section clockwise once', () => {
    const turn: Turn = { token: 'M', turnType: turntype };

    beforeAll(() => {
      action(cube, turn);
    });

    it('Should pass an Middle layer, clockwise direction once', () => {
      expect(spy).toHaveBeenCalledWith(
        LAYERS.MIDDLE,
        CubeRotationDirection.ClockWise,
        null,
      );
    });
  });

  describe('Rotating a middle section clockwise twice', () => {
    const turn: Turn = { token: 'M2', turnType: turntype };

    beforeAll(() => {
      action(cube, turn);
    });

    it('Should pass an Middle layer, clockwise direction twice', () => {
      expect(spy).toHaveBeenCalledWith(
        LAYERS.MIDDLE,
        CubeRotationDirection.ClockWise,
        2,
      );
    });
  });

  describe('Rotating a middle section antclockwise once', () => {
    const turn: Turn = { token: "M'", turnType: turntype };

    beforeAll(() => {
      action(cube, turn);
    });

    it('Should pass an Middle layer, anticlockwise direction once', () => {
      expect(spy).toHaveBeenCalledWith(
        LAYERS.MIDDLE,
        CubeRotationDirection.AntiClockWise,
        null,
      );
    });
  });
});
