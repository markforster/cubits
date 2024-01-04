import { AxisVertex, rotateVectorsAtindices } from '.';
import { CubeRotationDirection, CubeState, Vertex } from '..';
import { indicesForvertices } from './indicesForvertices';
import { LAYERS, VertexForLayer } from './layers';
import { FULL_ROTATION } from './rotation';

export function rotateLayer(
  layer: LAYERS,
  direction: CubeRotationDirection,
  cubeState: CubeState,
): void {
  const inds: any[] = indicesForvertices(cubeState, VertexForLayer[layer]);
  const angle = direction * FULL_ROTATION;

  const rotationAxis = ((): [Vertex, number] => {
    if (layer === LAYERS.TOP) return [AxisVertex.YAW, angle];
    if (layer === LAYERS.BOTTOM) return [AxisVertex.YAW, -angle];
    if (layer === LAYERS.EQUATOR) return [AxisVertex.YAW, angle];

    if (layer === LAYERS.LEFT) return [AxisVertex.PITCH, -angle];
    if (layer === LAYERS.RIGHT) return [AxisVertex.PITCH, angle];
    if (layer === LAYERS.MIDDLE) return [AxisVertex.PITCH, angle];

    if (layer === LAYERS.FRONT) return [AxisVertex.ROLL, angle];
    if (layer === LAYERS.BACK) return [AxisVertex.ROLL, angle];
    if (layer === LAYERS.STANDING) return [AxisVertex.ROLL, angle];
  })();

  const [_axis, _angle] = rotationAxis;

  rotateVectorsAtindices(cubeState, inds, _angle, _axis);
}
