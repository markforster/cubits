import { LayersVertex, AxisVertex } from '.';
import { CubeState } from '../cube';
import { RotationAngle } from '../cube/lib';
import { rotateLayerForVertex } from './rotateLayerForVertex';
import { arrayEquals } from './arrayEquals';
import { COLOURS } from './colours';
import { layerVertexForColour } from './layerVertexForColour';

export const rotateLayerForColour = (
  cubeState: CubeState,
  colour: COLOURS,
  angle: RotationAngle,
) => {
  const t: any = layerVertexForColour(cubeState, colour);

  const rotationAxis = (() => {
    if (arrayEquals(LayersVertex.TOP, t)) return AxisVertex.YAW;
    if (arrayEquals(LayersVertex.BOTTOM, t)) return AxisVertex.YAW;

    if (arrayEquals(LayersVertex.LEFT, t)) return AxisVertex.PITCH;
    if (arrayEquals(LayersVertex.RIGHT, t)) return AxisVertex.PITCH;

    if (arrayEquals(LayersVertex.FRONT, t)) return AxisVertex.ROLL;
    if (arrayEquals(LayersVertex.BACK, t)) return AxisVertex.ROLL;
  })();

  rotateLayerForVertex(cubeState, t, rotationAxis, angle);
};
