import { LayersVertex } from '..';
import { CubeState } from '../../cube';
import { FaceOption } from '../face';
import { faceForFaceOption } from '../face/faceForFaceOption';
import { newCubeState } from '../factory';
import { rotateCubeState } from '../rotateCubeState';
import * as lib from '../../lib/face/tests/faceForFaceOption.lib';

describe('Rotating a given cube face to a new position', () => {
  describe('Rotating the source face to itself', () => {
    const cubeState: CubeState = newCubeState();

    it('Expect the top (White) face to have not changed', () => {
      rotateCubeState(cubeState, LayersVertex.TOP, LayersVertex.TOP);

      // Expect the top cube state to have not changed
      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );
    });

    it('Expect the bottom (Yellow) face to have not changed', () => {
      rotateCubeState(cubeState, LayersVertex.BOTTOM, LayersVertex.BOTTOM);

      expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).colours).toEqual(
        lib.ALL_YELLOW_COLOURS,
      );
    });

    it('Expect the left (Orange) face to have not changed', () => {
      rotateCubeState(cubeState, LayersVertex.LEFT, LayersVertex.LEFT);

      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );
    });

    it('Expect the right (Red) face to have not changed', () => {
      rotateCubeState(cubeState, LayersVertex.RIGHT, LayersVertex.RIGHT);

      expect(faceForFaceOption(cubeState, FaceOption.RIGHT).colours).toEqual(
        lib.ALL_RED_COLOURS,
      );
    });

    it('Expect the front (Green) face to have not changed', () => {
      rotateCubeState(cubeState, LayersVertex.FRONT, LayersVertex.FRONT);

      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );
    });

    it('Expect the back (Blue) face to have not changed', () => {
      rotateCubeState(cubeState, LayersVertex.BACK, LayersVertex.BACK);

      expect(faceForFaceOption(cubeState, FaceOption.BACK).colours).toEqual(
        lib.ALL_BLUE_COLOURS,
      );
    });
  });

  describe('Rotating a face to its opposite', () => {
    let cubeState: CubeState;

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Expect the top (White) face to be at the bottom', () => {
      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).colours).toEqual(
        lib.ALL_YELLOW_COLOURS,
      );

      rotateCubeState(cubeState, LayersVertex.TOP, LayersVertex.BOTTOM);

      // Expect the top cube state to have not changed
      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_YELLOW_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );
    });

    it('Expect the bottom (Yellow) face to be at the top', () => {
      expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).colours).toEqual(
        lib.ALL_YELLOW_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );

      rotateCubeState(cubeState, LayersVertex.BOTTOM, LayersVertex.TOP);

      // Expect the top cube state to have not changed
      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_YELLOW_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );
    });

    it('Expect the left (Orange) face to be at the right', () => {
      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.RIGHT).colours).toEqual(
        lib.ALL_RED_COLOURS,
      );

      rotateCubeState(cubeState, LayersVertex.LEFT, LayersVertex.RIGHT);

      // Expect the top cube state to have not changed
      expect(faceForFaceOption(cubeState, FaceOption.RIGHT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_RED_COLOURS,
      );
    });

    it('Expect the front (Green) face to be at the back', () => {
      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.BACK).colours).toEqual(
        lib.ALL_BLUE_COLOURS,
      );

      rotateCubeState(cubeState, LayersVertex.FRONT, LayersVertex.BACK);

      // Expect the top cube state to have not changed
      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_BLUE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.BACK).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );
    });
  });

  describe('Preserving the front face if no locked axis specified', () => {
    let cubeState: CubeState;

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should preserve the front green (front) face when white (top) face is moved to the left', () => {
      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );

      rotateCubeState(cubeState, LayersVertex.TOP, LayersVertex.LEFT);

      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_RED_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );
    });

    it('Should preserve the front green (front) face when the orange (left) face is moved to the top', () => {
      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );

      rotateCubeState(cubeState, LayersVertex.LEFT, LayersVertex.TOP);

      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_YELLOW_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );
    });

    it('Should preserve the front green (front) face when the orange (left) face is moved to the right', () => {
      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );

      rotateCubeState(cubeState, LayersVertex.LEFT, LayersVertex.RIGHT);

      expect(faceForFaceOption(cubeState, FaceOption.RIGHT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_YELLOW_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.RIGHT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );
    });
  });

  describe('Specifying locking the side faces', () => {
    let cubeState: CubeState;

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should preserve the side faces when moving the white (top) face to the bottom', () => {
      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).colours).toEqual(
        lib.ALL_YELLOW_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_GREEN_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );

      rotateCubeState(
        cubeState,
        LayersVertex.TOP,
        LayersVertex.BOTTOM,
        LayersVertex.LEFT,
      );

      expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
        lib.ALL_YELLOW_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).colours).toEqual(
        lib.ALL_WHITE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
        lib.ALL_BLUE_COLOURS,
      );

      expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
        lib.ALL_ORANGE_COLOURS,
      );
    });
  });
});
