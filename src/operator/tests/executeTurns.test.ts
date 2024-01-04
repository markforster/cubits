import { Turn, TurnType } from '../types';
import { tokenisers } from '../actions/';
import { executeTurns } from '../lib';
import { Cube, ICube } from '../..';

jest.spyOn(tokenisers[0], 'callback');
jest.spyOn(tokenisers[1], 'callback');
jest.spyOn(tokenisers[2], 'callback');
jest.spyOn(tokenisers[3], 'callback');

describe(`Executing Turns`, () => {
  let cube: ICube;

  beforeAll(() => {
    cube = new Cube();
  });

  describe(`Orientating the Cube`, () => {
    beforeAll(() => {
      jest.mocked(tokenisers[0].callback).mockImplementation(() => {});
    });

    describe(`Orientating with 1 turn`, () => {
      const turns: Turn[] = [{ turnType: TurnType.Orientation, token: 'fL' }];

      beforeAll(() => {
        jest.resetAllMocks();
        executeTurns(turns, cube);
      });

      it('should call the action callback for rotateSection once', () => {
        expect(tokenisers[0].callback as jest.Mock).toBeCalled();
      });

      it('should pass the cube and turn[0] as parameters', () => {
        expect(tokenisers[0].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[0],
          undefined,
        );
      });
    });

    describe(`Orientating with 2 turns`, () => {
      const turns: Turn[] = [
        { turnType: TurnType.Orientation, token: 'fL' },
        { turnType: TurnType.Orientation, token: 'fU' },
      ];

      beforeAll(() => {
        jest.resetAllMocks();
        executeTurns(turns, cube);
      });

      it('should call the action callback for orientation twice', () => {
        expect(tokenisers[0].callback as jest.Mock).toBeCalledTimes(2);
      });

      it('should call the action passing cube, turn[0] and undefined as parameters', () => {
        expect(tokenisers[0].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[0],
          undefined,
        );
      });

      it('should call the action passing cube, turn[1] and turn[0] as parameters', () => {
        expect(tokenisers[0].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[1],
          turns[0],
        );
      });
    });
  });

  describe(`Executing turns for full rotation of the cube`, () => {
    beforeAll(() => {
      jest.mocked(tokenisers[1].callback).mockImplementation(() => {});
    });

    describe(`Rotating around X with 1 turn`, () => {
      const turns: Turn[] = [{ turnType: TurnType.CubeRotation, token: 'X' }];

      beforeAll(() => {
        jest.resetAllMocks();
        executeTurns(turns, cube);
      });

      it('should call the action callback for rotateAll once', () => {
        expect(tokenisers[1].callback as jest.Mock).toBeCalled();
      });

      it('should pass the cube and turn[0] as parameters', () => {
        expect(tokenisers[1].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[0],
          undefined,
        );
      });
    });

    describe(`Rotating around X with 2 turns`, () => {
      const turns: Turn[] = [
        { turnType: TurnType.CubeRotation, token: 'X' },
        { turnType: TurnType.CubeRotation, token: 'Y' },
      ];

      beforeAll(() => {
        jest.resetAllMocks();
        executeTurns(turns, cube);
      });

      it('should call the action callback for rotateAll twice', () => {
        expect(tokenisers[1].callback as jest.Mock).toBeCalledTimes(2);
      });

      it('should call the action passing cube, turn[0] and undefined as parameters', () => {
        expect(tokenisers[1].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[0],
          undefined,
        );
      });

      it('should call the action passing cube, turn[1] and turn[0] as parameters', () => {
        expect(tokenisers[1].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[1],
          turns[0],
        );
      });
    });
  });

  describe(`Executing turns for an EMS Inner layers`, () => {
    beforeAll(() => {
      jest.mocked(tokenisers[2].callback).mockImplementation(() => {});
    });

    describe(`Rotating around Equator with 1 turn`, () => {
      const turns: Turn[] = [
        { turnType: TurnType.InnerLayerRotation, token: 'E' },
      ];

      beforeAll(() => {
        jest.resetAllMocks();
        executeTurns(turns, cube);
      });

      it('should call the action callback for rotateSection once', () => {
        expect(tokenisers[2].callback as jest.Mock).toBeCalled();
      });

      it('should pass the cube and turn[0] as parameters', () => {
        expect(tokenisers[2].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[0],
          undefined,
        );
      });
    });

    describe(`Rotating around Equator with 2 turns`, () => {
      const turns: Turn[] = [
        { turnType: TurnType.InnerLayerRotation, token: 'E' },
        { turnType: TurnType.InnerLayerRotation, token: 'M' },
      ];

      beforeAll(() => {
        jest.resetAllMocks();
        executeTurns(turns, cube);
      });

      it('should call the action callback for rotateAll twice', () => {
        expect(tokenisers[2].callback as jest.Mock).toBeCalledTimes(2);
      });

      it('should call the action passing cube, turn[0] and undefined as parameters', () => {
        expect(tokenisers[2].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[0],
          undefined,
        );
      });

      it('should call the action passing cube, turn[1] and turn[0] as parameters', () => {
        expect(tokenisers[2].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[1],
          turns[0],
        );
      });
    });
  });

  describe(`Executing turns for an FRULBD Outer layers`, () => {
    beforeAll(() => {
      jest.mocked(tokenisers[3].callback).mockImplementation(() => {});
    });

    describe(`Rotating around Equator with 1 turn`, () => {
      const turns: Turn[] = [
        { turnType: TurnType.OuterLayerRotation, token: 'F' },
      ];

      beforeAll(() => {
        jest.resetAllMocks();
        executeTurns(turns, cube);
      });

      it('should call the action callback for rotateSection once', () => {
        expect(tokenisers[3].callback as jest.Mock).toBeCalled();
      });

      it('should pass the cube and turn[0] as parameters', () => {
        expect(tokenisers[3].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[0],
          undefined,
        );
      });
    });

    describe(`Rotating around Equator with 2 turns`, () => {
      const turns: Turn[] = [
        { turnType: TurnType.OuterLayerRotation, token: 'F' },
        { turnType: TurnType.OuterLayerRotation, token: 'L' },
      ];

      beforeAll(() => {
        jest.resetAllMocks();
        executeTurns(turns, cube);
      });

      it('should call the action callback for rotateAll twice', () => {
        expect(tokenisers[3].callback as jest.Mock).toBeCalledTimes(2);
      });

      it('should call the action passing cube, turn[0] and undefined as parameters', () => {
        expect(tokenisers[3].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[0],
          undefined,
        );
      });

      it('should call the action passing cube, turn[1] and turn[0] as parameters', () => {
        expect(tokenisers[3].callback as jest.Mock).toBeCalledWith(
          cube,
          turns[1],
          turns[0],
        );
      });
    });
  });
});
