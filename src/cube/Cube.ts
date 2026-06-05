import { CubeState } from './state';
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
import { rotateVectorsAtindices } from '../lib/rotateVectorsAtindices';
import { FULL_ROTATION } from '../lib/rotation';
import { solved } from '../lib/solution/solved';
import { LayersVertex } from '../lib/vectors';
import { ICube } from './ICube';
import { IFace } from './IFace';
import { CubeRotationDirection, Orientation } from './lib';

export class Cube implements ICube {
  private readonly _state: CubeState;

  constructor(cubeState?: CubeState) {
    this._state = cubeState || newCubeState();
  }

  get state(): CubeState {
    return this._state.map(([p, o]) => [
      [...p] as typeof p,
      [...o] as typeof o,
    ]) as CubeState;
  }

  solved(colour?: COLOURS): boolean {
    return solved(this._state, colour);
  }

  orientate(
    sourceOrientation: Orientation,
    targetOrientation: Orientation,
    lockedOrientation?: Orientation,
  ): void {
    rotateCubeState(
      this._state,
      LayersVertex[sourceOrientation],
      LayersVertex[targetOrientation],
      (lockedOrientation && LayersVertex[lockedOrientation]) || undefined,
    );
  }

  rotate(axis: Axis, direction: CubeRotationDirection, times?: number) {
    const angle = direction * FULL_ROTATION * (times ? times : 1);
    rotateVectorsAtindices(
      this._state,
      this._state.map((_v: any, i: number) => i),
      angle,
      AxisToVertex[KeysForEnum(Axis)[axis]],
    );
  }

  rotateLayerForColour(colour: COLOURS, direction: CubeRotationDirection) {
    const angle = direction * FULL_ROTATION;
    rotateLayerForColour(this._state, colour, angle);
  }

  rotateLayer(
    layer: LAYERS,
    direction: CubeRotationDirection,
    times?: number,
  ): void {
    if (times && times > 0 && times < 4) {
      for (let i = 0; i < times; i++) {
        rotateLayer(layer, direction, this._state);
      }
    } else {
      rotateLayer(layer, direction, this._state);
    }
  }

  face(option: FaceOption): IFace {
    return faceForFaceOption(this._state, option);
  }
}
