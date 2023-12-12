import { AxisVertex, rotateVectorsAtindices } from '.';
import { CubeState } from '../cube';
import { Vertex } from '../cube/lib';
import { angleBetweenVectors } from './angleBetweenVectors';
import { COLOURS } from './colours';
import { layerNormalForColour } from './layerVertexForColour';
import { primaryUnit } from './primaryUnit';

export const orientateFaceToDirection = (
  cubestate: CubeState,
  color: COLOURS,
  targetVertex: Vertex,
  lockedVertices?: Vertex,
) => {
  const t = AxisVertex.PITCH;
  console.log('AxisVertex.PITCH', t);

  // console.log('lockedVertices', lockedVertices)
  // Start by working out which vertex should be locked
  // Next see if the vertex we want to rotate is on the same plane!
  // e.g. Rotate [0, 2, 0] > [ 0, 0, -2] U > F

  // Lets say we wanat to lock left [-2, 0, 0] > This should be fine as does not conflict!

  // e.g. Rotate [0, 2, 0] > [ 2, 0, 0] U > F
  // Lets say we wanat to lock left [-2, 0, 0] > This will conflict as you cant
  // preserve the [X,_, _] component
  // Should throw an exception here!

  // e.g. Rotate [0, 2, 0] > [ 0, -2, 0] U > F
  // Lets say we wanat to lock left [-2, 0, 0] > We can pitch
  // Lets say we wanat to lock left [0, 2, 0] > We can roll
  // preserve the [X,_, _] component
  // Should throw an exception here!

  // const axisVertices: [Vertex, Vertex, Vertex] = [
  //   AxisVertex.ROLL,
  //   AxisVertex.PITCH,
  //   AxisVertex.YAW,
  // ];
  // const lnfc = layerNormalForColour(cubestate, color);
  // const pu = primaryUnit(lnfc);

  // console.log('lnfc', lnfc)
  // console.log('pu', pu)
  // const axis = axisVertices[pu[0]];
  // const topAngle1 =
  //   angleBetweenVectors(lnfc, targetVertex) * (pu[1] > 0 ? -1 : 1);

  // !!!! Investigate if valid locking can be implemented via a type!?
  // Perform prechecks!?

  // console.log('topAngle1', topAngle1)
  // console.log('axis', axis)
  // rotateVectorsAtindices(
  //   cubestate,
  //   cubestate.map((_v: any, i: number) => i),
  //   topAngle1,
  //   axis,
  // );
};
