import { FaceOption } from '..';
import { CubeState } from '../../../cube';
import { Cube } from '../../../cube/Cube';
import { CubeRotationDirection } from '../../../cube/lib';
import { Axis } from '../../rotate';
import { IFace } from '../../../cube/IFace';
import { newCubeState } from '../../factory';
import { faceForFaceOption } from '../faceForFaceOption';
import { COLOURS } from '../../colours';
import * as lib from './faceForFaceOption.lib';

describe('Getting a face for a face option', () => {
  let cubeState: CubeState;

  beforeEach(() => {
    cubeState = newCubeState();
  });

  describe('Given an new unaltered cube state', () => {
    // Specified by Orientation
    it('Should return the WHITE face when the TOP face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.TOP);

      expect(face.colours).toEqual(lib.ALL_WHITE_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_WHITE);
    });

    it('Should return the YELLOW face when the TOP face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.BOTTOM);

      expect(face.colours).toEqual(lib.ALL_YELLOW_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_YELLOW);
    });

    it('Should return the GREEN face when the FRONT face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.FRONT);

      expect(face.colours).toEqual(lib.ALL_GREEN_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_GREEN);
    });

    it('Should return the BLUE face when the BACK face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.BACK);

      expect(face.colours).toEqual(lib.ALL_BLUE_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_BLUE);
    });

    it('Should return the RED face when the RIGHT face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.RIGHT);

      expect(face.colours).toEqual(lib.ALL_RED_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_RED);
    });

    it('Should return the ORANGE face when the LEFT face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.LEFT);

      expect(face.colours).toEqual(lib.ALL_ORANGE_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_ORANGE);
    });

    // Specified by Colour
    it('Should return the WHITE face when the WHITE face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.WHITE);
      expect(face.colours).toEqual(lib.ALL_WHITE_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_WHITE);
    });

    it('Should return the YELLOW face when the YELLOW face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.YELLOW);

      expect(face.colours).toEqual(lib.ALL_YELLOW_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_YELLOW);
    });

    it('Should return the GREEN face when the GREEN face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.GREEN);

      expect(face.colours).toEqual(lib.ALL_GREEN_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_GREEN);
    });

    it('Should return the BLUE face when the BLUE face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.BLUE);

      expect(face.colours).toEqual(lib.ALL_BLUE_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_BLUE);
    });

    it('Should return the RED face when the RED face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.RED);

      expect(face.colours).toEqual(lib.ALL_RED_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_RED);
    });

    it('Should return the ORANGE face when the ORANGE face is specified', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.ORANGE);

      expect(face.colours).toEqual(lib.ALL_ORANGE_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_ORANGE);
    });
  });

  describe('Given a cube state rotated around the WHITE layer', () => {
    beforeEach(() => {
      const cube = new Cube(cubeState);
      cube.rotateLayerForColour(COLOURS.WHITE, CubeRotationDirection.ClockWise);
    });

    it('Should keep white colours but change normals and positions', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.WHITE);

      expect(face.colours).toEqual(lib.ALL_WHITE_COLOURS);
      expect(face.indices).toEqual(lib.INDICES_FOR_WHITE);
      expect(face.normals).not.toEqual(lib.NORMALS_FOR_WHITE);
      expect(face.positions).not.toEqual(lib.POSITIONS_FOR_WHITE);
    });
  });

  describe('Given a cube state rotated around its axis by Pitch', () => {
    beforeEach(() => {
      const cube = new Cube(cubeState);
      cube.rotate(Axis.X, CubeRotationDirection.ClockWise);
    });

    it('Should update the top face after rotation', () => {
      const face: IFace = faceForFaceOption(cubeState, FaceOption.TOP);

      expect(face.colours).not.toEqual(lib.ALL_WHITE_COLOURS);
      expect(face.normals).not.toEqual(lib.NORMALS_FOR_WHITE);
      expect(face.positions).not.toEqual(lib.POSITIONS_FOR_WHITE);
    });
  });
});
