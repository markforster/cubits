import { Cube, CubeState, FaceOption, ICube, IFace, Vertex, newCubeState } from '../..';
import { cW } from '../colours';
import { coloursForVertices } from '../coloursForVeritces';
import { ALL_WHITE_COLOURS } from '../face/tests/faceForFaceOption.lib';

describe('Testing colours for vertices', () => {
  let cubeState: CubeState;
  let cube: ICube;

  beforeAll(() => {
    cubeState = newCubeState();
    cube = new Cube(cubeState);
  });

  describe('Colours for top layer', () => {
    it(`should be all white`, () => {
      const face: IFace = cube.face(FaceOption.TOP);
      expect(face.colours).toEqual(ALL_WHITE_COLOURS);
    });
  });

  describe('Colours for different vertices', () => {
    it(`colours should match there indices`, () => {
      const efI: Vertex[] = [[-1, 2, -1]];
      expect(coloursForVertices(efI, cubeState)).toEqual([cW]);
    });
  });

  describe('Colours for non existent vertices', () => {
    it(`to be undefined`, () => {
      const efI: Vertex[] = [[-1, 3, -1]];
      expect(coloursForVertices(efI, cubeState)).toEqual([undefined]);
    });
  });
});
