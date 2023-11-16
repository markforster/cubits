import { CubeState } from '.';
import { AxisVertex, rotateVectorsAtIndeces } from '../lib';
import { COLOURS } from '../lib/colours';
import { newCubeState } from '../lib/factory';
import { orientateFaceToDirection } from '../lib/orientateFaceToDirection';
import { rotateLayerForColour } from '../lib/rotateLayerForColour';
import { FULL_ROTATION } from '../lib/rotation';
import { solved } from '../lib/solution/solved';
import { ICube } from './ICube';
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
    orientateFaceToDirection(
      this.state,
      orientation.top,
      [0, 2, 0],
      // [AxisVertex.ROLL, AxisVertex.YAW, AxisVertex.PITCH],
    );

    orientateFaceToDirection(
      this.state,
      orientation.left,
      [-2, 0, 0],
      // [AxisVertex.YAW, AxisVertex.YAW, AxisVertex.YAW],
    );
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
}
