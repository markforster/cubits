import { CubeState } from '.';
import { rotateVectorsAtIndeces } from '../lib';
import { COLOURS } from '../lib/colours';
import { FaceOption } from '../lib/face';
import { faceForFaceOption } from '../lib/face/faceForFaceOption';
import { newCubeState } from '../lib/factory';
import { rotateLayerForColour } from '../lib/rotateLayerForColour';
import { FULL_ROTATION } from '../lib/rotation';
import { solved } from '../lib/solution/solved';
import { ICube } from './ICube';
import { IFace } from './IFace';
import { Vertex, CubeRotationDirection } from './lib';

export class Cube implements ICube {
  readonly state: CubeState;

  constructor(cubeState?: CubeState) {
    this.state = cubeState || newCubeState();
  }

  orientate?(): void {
    throw new Error('Method not implemented.');
  }

  solved(colour?: COLOURS): boolean {
    return solved(this.state, colour);
  }

  rotate(axis: Vertex, direction: CubeRotationDirection) {
    const angle = direction * FULL_ROTATION;
    rotateVectorsAtIndeces(
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
