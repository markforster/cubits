import { CubeState } from '.';
import { LayersVertex, rotateVectorsAtindices } from '../lib';
import { COLOURS } from '../lib/colours';
import { KeysForEnum } from '../lib/enums';
import { FaceOption } from '../lib/face';
import { faceForFaceOption } from '../lib/face/faceForFaceOption';
import { newCubeState } from '../lib/factory';
import { LAYERS } from '../lib/layers';
import { Axis, AxisToVertex } from '../lib/rotate';
import { rotateCubeState } from '../lib/rotateCubeState';
import { rotateLayer } from '../lib/rotateLayer';
import { rotateLayerForColour } from '../lib/rotateLayerForColour';
import { FULL_ROTATION } from '../lib/rotation';
import { solved } from '../lib/solution/solved';
import { ICube } from './ICube';
import { IFace } from './IFace';
import { CubeRotationDirection, Orientation } from './lib';

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

  rotate(axis: Axis, direction: CubeRotationDirection, times?: number) {
    const angle = direction * FULL_ROTATION * (times ? times : 1);
    rotateVectorsAtindices(
      this.state,
      this.state.map((_v: any, i: number) => i),
      angle,
      AxisToVertex[KeysForEnum(Axis)[axis]],
    );
  }

  rotateLayerForColour(colour: COLOURS, direction: CubeRotationDirection) {
    const angle = direction * FULL_ROTATION;
    rotateLayerForColour(this.state, colour, angle);
  }

  rotateLayer(
    layer: LAYERS,
    direction: CubeRotationDirection,
    times?: number,
  ): void {
    if (times && times > 0 && times < 4) {
      for (let i = 0; i < times; i++) {
        rotateLayer(layer, direction, this.state);
      }
    } else {
      rotateLayer(layer, direction, this.state);
    }
  }

  face(option: FaceOption): IFace {
    return faceForFaceOption(this.state, option);
  }
}
