import { Cube, newCubeState } from '../../..';
import { CubeState } from '../../../cube';
import { ICube } from '../../../cube/ICube';
import { Orientation } from '../../../cube/lib';
import { Turn } from '../../types';
import {
  action,
  turntype,
  orientationsForToken,
  FaceChar,
  OrientationChar,
} from '../orientate';

describe('Orientate action', () => {
  describe('orientationsForToken', () => {
    const faces: [FaceChar, Orientation][] = [
      ['u', Orientation.TOP],
      ['d', Orientation.BOTTOM],
      ['f', Orientation.FRONT],
      ['b', Orientation.BACK],
      ['l', Orientation.LEFT],
      ['r', Orientation.RIGHT],
    ];

    const axes: [OrientationChar, Orientation][] = [
      ['U', Orientation.TOP],
      ['D', Orientation.BOTTOM],
      ['F', Orientation.FRONT],
      ['B', Orientation.BACK],
      ['L', Orientation.LEFT],
      ['R', Orientation.RIGHT],
    ];

    faces.forEach(([faceToken, faceOrientation]) => {
      axes.forEach(([axisToken, axisOrientation]) => {
        const token = `${faceToken}${axisToken}`;
        it(`should map ${token} to ${faceOrientation} and ${axisOrientation}`, () => {
          expect(orientationsForToken(token)).toEqual([
            faceOrientation,
            axisOrientation,
          ]);
        });
      });
    });

    it('should return [undefined, undefined] for missing token', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(orientationsForToken(undefined as any)).toEqual([undefined, undefined]);
    });

    it('should return [undefined, undefined] for invalid token', () => {
      expect(orientationsForToken('xZ' as any)).toEqual([undefined, undefined]);
    });
  });

  describe('action', () => {
    let cubeState: CubeState;
    let cube: ICube;
    let spy: jest.SpyInstance;

    beforeEach(() => {
      cubeState = newCubeState();
      cube = new Cube(cubeState);
      spy = jest.spyOn(cube, 'orientate');
    });

    afterEach(() => {
      spy.mockReset();
    });

    it('should orientate cube using parsed token', () => {
      const turn: Turn = { token: 'fR', turnType: turntype };
      action(cube, turn);
      expect(spy).toHaveBeenCalledWith(
        Orientation.FRONT,
        Orientation.RIGHT,
        undefined,
      );
    });

    it('should pass locked orientation from last turn', () => {
      const lastTurn: Turn = { token: 'uD', turnType: turntype };
      const turn: Turn = { token: 'fR', turnType: turntype };
      action(cube, turn, lastTurn);
      expect(spy).toHaveBeenCalledWith(
        Orientation.FRONT,
        Orientation.RIGHT,
        Orientation.BOTTOM,
      );
    });
  });
});
