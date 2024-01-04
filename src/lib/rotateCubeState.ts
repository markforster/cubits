import { rotateVectorsAtindices } from '.';
import { CubeState } from '../cube';
import { Vertex } from '../cube/lib';
import { arrayEquals } from './arrayEquals';
import { crossProduct } from './crossProduct';
import { determinRotationAxis } from './determinRotationAxis';

export const rotateCubeState = (
  cubestate: CubeState,
  sourceAxis: Vertex,
  targetAxis: Vertex,
  lockedAxis?: Vertex,
): void => {
  if (arrayEquals(sourceAxis, targetAxis)) return;

  const finalVertex: Vertex = determinRotationAxis(
    sourceAxis,
    targetAxis,
    lockedAxis,
  );

  const cross_P: Vertex = crossProduct(sourceAxis, targetAxis);

  const finalAngle: any = cross_P
    .map((v: number, i: number) => {
      if (v === 0 && finalVertex[i] === 1) return 180;

      return v * finalVertex[i] * 90;
    })
    .reduce((p, c) => p + c);

  rotateVectorsAtindices(
    cubestate,
    cubestate.map((_v: any, i: number) => i),
    finalAngle,
    finalVertex,
  );
};
