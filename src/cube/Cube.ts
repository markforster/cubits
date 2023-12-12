import { CubeState } from '.';
import { rotateVectorsAtindices } from '../lib';
import { COLOURS } from '../lib/colours';
import { FaceOption } from '../lib/face';
import { faceForFaceOption } from '../lib/face/faceForFaceOption';
import { newCubeState } from '../lib/factory';
import { orientateFaceToDirection } from '../lib/orientateFaceToDirection';
import { rotateLayerForColour } from '../lib/rotateLayerForColour';
import { FULL_ROTATION } from '../lib/rotation';
import { solved } from '../lib/solution/solved';
import { ICube } from './ICube';
import { IFace } from './IFace';
import { Vertex, CubeRotationDirection, Orientation } from './lib';

export class Cube implements ICube {
  readonly state: CubeState;

  constructor(cubeState?: CubeState) {
    this.state = cubeState || newCubeState();
  }

  solved(colour?: COLOURS): boolean {
    return solved(this.state, colour);
  }

  orientate(orientation: Orientation) {
    console.log('orientation', orientation);
    // Start by moving one face while constraining another!!
    // Dont deal with colours!!! Deal with faces: Top, BOttom etc!
    // Start by
    // Do the one that needs to go to the top first!
    // orientateFaceToDirection(
    //   this.state,
    //   orientation.top,
    //   [0, 2, 0],
    //   // [AxisVertex.ROLL, AxisVertex.YAW, AxisVertex.PITCH],
    // );

    // // Then do the next as in theory it should ALWAYS be a yaw
    // orientateFaceToDirection(
    //   this.state,
    //   orientation.left,
    //   [-2, 0, 0],
    //   // [AxisVertex.YAW, AxisVertex.YAW, AxisVertex.YAW],
    // );
  }

  rotate(axis: Vertex, direction: CubeRotationDirection) {
    const angle = direction * FULL_ROTATION;
    rotateVectorsAtindices(
      this.state,
      this.state.map((_v: any, i: number) => i),
      angle,
      axis,
    );
  }

  rotateLayerForColour(colour: COLOURS, direction: CubeRotationDirection) {
    const angle = direction * FULL_ROTATION;
    rotateLayerForColour(this.state, colour, angle);
  }

  face(option: FaceOption): IFace {
    return faceForFaceOption(this.state, option);
  }
}
