import { LayersVertex, AxisVertex } from '.';
import { CubeState } from '../cube';
import { RotationAngle, Vertex } from '../cube/lib';
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

  const rotationAxis = ((): [Vertex, number] => {
    if (arrayEquals(LayersVertex.TOP, t)) return [AxisVertex.YAW, angle];
    if (arrayEquals(LayersVertex.BOTTOM, t)) return [AxisVertex.YAW, -angle];

    if (arrayEquals(LayersVertex.LEFT, t)) return [AxisVertex.PITCH, -angle];
    if (arrayEquals(LayersVertex.RIGHT, t)) return [AxisVertex.PITCH, angle];

    if (arrayEquals(LayersVertex.FRONT, t)) return [AxisVertex.ROLL, angle];
    if (arrayEquals(LayersVertex.BACK, t)) return [AxisVertex.ROLL, -angle];
  })();

  const [_axis, _angle] = rotationAxis;

  rotateLayerForVertex(cubeState, t, _axis, _angle);
};
