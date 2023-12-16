import { CubeState } from '.';
import { LayersVertex, rotateVectorsAtindices } from '../lib';
import { COLOURS } from '../lib/colours';
import { FaceOption } from '../lib/face';
import { faceForFaceOption } from '../lib/face/faceForFaceOption';
import { newCubeState } from '../lib/factory';
import { rotateCubeState } from '../lib/rotateCubeState';
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

  orientate(
    sourceOrientation: Orientation,
    targetOrientation: Orientation,
    lockedOrientation?: Orientation,
  ): void {
    rotateCubeState(
      this.state,
      LayersVertex[sourceOrientation],
      LayersVertex[targetOrientation],
      (lockedOrientation && LayersVertex[lockedOrientation]) || undefined,
    );
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
