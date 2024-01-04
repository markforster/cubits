import { CubeState } from '..';
import { FaceOption } from '../../lib/face';
import { faceForFaceOption } from '../../lib/face/faceForFaceOption';
import * as lib from '../../lib/face/tests/faceForFaceOption.lib';
import { newCubeState } from '../../lib/factory';

describe('Face should provide the IFace interace', () => {
  const cubeState: CubeState = newCubeState();

  it('Should return the face option that was passed to its constructor', () => {
    expect(faceForFaceOption(cubeState, FaceOption.TOP).option).toBe(
      FaceOption.TOP,
    );

    // const face: IFace = faceForFaceOption(cubeState, FaceOption.BOTTOM);
    expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).option).toBe(
      FaceOption.BOTTOM,
    );

    expect(faceForFaceOption(cubeState, FaceOption.BACK).option).toBe(
      FaceOption.BACK,
    );

    expect(faceForFaceOption(cubeState, FaceOption.FRONT).option).toBe(
      FaceOption.FRONT,
    );

    expect(faceForFaceOption(cubeState, FaceOption.LEFT).option).toBe(
      FaceOption.LEFT,
    );

    expect(faceForFaceOption(cubeState, FaceOption.RIGHT).option).toBe(
      FaceOption.RIGHT,
    );
  });

  it('Should return the correct indices for a face option specified in its constructor', () => {
    expect(faceForFaceOption(cubeState, FaceOption.TOP).indices).toEqual(
      lib.INDICES_FOR_WHITE,
    );

    expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).indices).toEqual(
      lib.INDICES_FOR_YELLOW,
    );

    expect(faceForFaceOption(cubeState, FaceOption.BACK).indices).toEqual(
      lib.INDICES_FOR_BLUE,
    );

    expect(faceForFaceOption(cubeState, FaceOption.FRONT).indices).toEqual(
      lib.INDICES_FOR_GREEN,
    );

    expect(faceForFaceOption(cubeState, FaceOption.LEFT).indices).toEqual(
      lib.INDICES_FOR_ORANGE,
    );

    expect(faceForFaceOption(cubeState, FaceOption.RIGHT).indices).toEqual(
      lib.INDICES_FOR_RED,
    );
  });

  it('Should return the correct colours for the face specified in its constructor', () => {
    expect(faceForFaceOption(cubeState, FaceOption.TOP).colours).toEqual(
      lib.ALL_WHITE_COLOURS,
    );

    expect(faceForFaceOption(cubeState, FaceOption.BOTTOM).colours).toEqual(
      lib.ALL_YELLOW_COLOURS,
    );

    expect(faceForFaceOption(cubeState, FaceOption.BACK).colours).toEqual(
      lib.ALL_BLUE_COLOURS,
    );

    expect(faceForFaceOption(cubeState, FaceOption.FRONT).colours).toEqual(
      lib.ALL_GREEN_COLOURS,
    );

    expect(faceForFaceOption(cubeState, FaceOption.LEFT).colours).toEqual(
      lib.ALL_ORANGE_COLOURS,
    );

    expect(faceForFaceOption(cubeState, FaceOption.RIGHT).colours).toEqual(
      lib.ALL_RED_COLOURS,
    );
  });

  it('Should return the correct normals for a top face', () => {
    expect(faceForFaceOption(cubeState, FaceOption.TOP).normals).toEqual(
      lib.NORMALS_FOR_WHITE,
    );
  });

  it('Should return the correct positions for a top face', () => {
    // console.log('positions', face.positions);
    expect(faceForFaceOption(cubeState, FaceOption.TOP).positions).toEqual(
      lib.POSITIONS_FOR_WHITE,
    );
  });

  // By colour
  it('Should return the face option that was passed to its constructor', () => {
    expect(faceForFaceOption(cubeState, FaceOption.WHITE).option).toBe(
      FaceOption.WHITE,
    );
  });

  it('Should return the correct indices for a top face', () => {
    expect(faceForFaceOption(cubeState, FaceOption.WHITE).indices).toEqual(
      lib.INDICES_FOR_WHITE,
    );
  });

  it('Should return the correct colours for a top face', () => {
    expect(faceForFaceOption(cubeState, FaceOption.WHITE).colours).toEqual(
      lib.ALL_WHITE_COLOURS,
    );
  });

  it('Should return the correct normals for a top face', () => {
    expect(faceForFaceOption(cubeState, FaceOption.WHITE).normals).toEqual(
      lib.NORMALS_FOR_WHITE,
    );
  });

  it('Should return the correct positions for a top face', () => {
    // console.log('positions', face.positions);
    expect(faceForFaceOption(cubeState, FaceOption.WHITE).positions).toEqual(
      lib.POSITIONS_FOR_WHITE,
    );
  });
});
