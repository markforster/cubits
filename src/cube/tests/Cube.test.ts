import { CubeState } from '..';
import { AxisVertex, COLOURS, Cube, CubeRotationDirection, FaceOption, ICube, IFace, Vertex } from '../..';
import { cG, cO, cR, cW, cY } from '../../lib/colours';
import { coloursForVertices } from '../../lib/coloursForVeritces';
import { ALL_WHITE_COLOURS, ALL_YELLOW_COLOURS } from '../../lib/face/tests/faceForFaceOption.lib';
import { newCubeState } from '../../lib/factory';
import { Axis, Layer } from '../../lib/rotate';
import { Face } from '../Face';


describe('Rotating the whole cube', () => {
  describe('Rotating the cube on its X axis twice', () => {
    let cubeState: CubeState;
    let cube: ICube;

    beforeAll(() => {
      cubeState = newCubeState();
      cube = new Cube(cubeState);
    });

    describe('before any interaction with the cube', () => {
      it('the top should be white', () => {
        const face: IFace = cube.face(FaceOption.TOP);

        expect(face.colours).toEqual(ALL_WHITE_COLOURS);
      });

      afterAll(() => {
        cube.rotate(Axis.X, CubeRotationDirection.ClockWise, 2);
      });
    });

    describe('after any interaction with the cube', () => {
      it('the top should be yellow', () => {
        const face: IFace = cube.face(FaceOption.TOP);

        expect(face.colours).toEqual(ALL_YELLOW_COLOURS);
      });
    });
  });
});
describe('Working with a cube', () => {
  describe('Checking the solved state of a cube', () => {
    let cubeState: CubeState;
    let cube: ICube;

    beforeAll(() => {
      cubeState = newCubeState();
      cube = new Cube(cubeState);
    });

    describe('before any interaction with the cube', () => {
      it('it should be solved by default', () => {
        expect(cube.solved()).toBe(true);
      });
      afterAll(() => {
        cube.rotateLayerForColour(
          COLOURS.WHITE,
          CubeRotationDirection.ClockWise,
        );
      });
    });

    describe('after any interaction with the cube', () => {
      it('it should not be solved', () => {
        expect(cube.solved()).toBe(false);
      });
    });
  });
});

describe('Rotating Layers once', () => {
  let cubeState: CubeState;
  let cube: ICube;
  const efI: Vertex[] = [[-1, 2, -1]];
  beforeAll(() => {
    cubeState = newCubeState();
    cube = new Cube(cubeState);
  });

  describe('Before rotating the layer', () => {
    it('Top should be white', () => {
      expect(coloursForVertices(efI, cubeState)).toEqual([cW]);
    });

    afterAll(() => {
      cube.rotateLayer(Layer.FRONT, CubeRotationDirection.ClockWise);
    });
  });

  describe('After rotating the layer', () => {
    it('Top should be orange', () => {
      expect(coloursForVertices(efI, cubeState)).toEqual([cO]);
    });
  });
});

describe('Rotating Layers twice', () => {
  let cubeState: CubeState;
  let cube: ICube;
  const efI: Vertex[] = [[-1, 2, -1]];
  beforeAll(() => {
    cubeState = newCubeState();
    cube = new Cube(cubeState);
  });

  describe('Before rotating the layer', () => {
    it('Top should be white', () => {
      expect(coloursForVertices(efI, cubeState)).toEqual([cW]);
    });

    afterAll(() => {
      cube.rotateLayer(Layer.FRONT, CubeRotationDirection.ClockWise, 2);
    });
  });

  describe('After rotating the layer', () => {
    it('Top should be yellow', () => {
      expect(coloursForVertices(efI, cubeState)).toEqual([cY]);
    });
  });
});

describe('Getting a cube face', () => {
  let cubeState: CubeState;
  let cube: ICube;
  // const efI: Vertex[] = [[-1, 2, -1]];
  beforeAll(() => {
    cubeState = newCubeState();
    cube = new Cube(cubeState);
  });

  describe('Getting the top face', () => {
    let face: IFace;

    beforeAll(() => {
      face = cube.face(FaceOption.TOP);
    });

    it(`The face should have white colours`, () => {
      expect(face.colours).toEqual(ALL_WHITE_COLOURS);
    });
  });
});
