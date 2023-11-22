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
  console.log('lockedVertices', lockedVertices)

  const axisVertices: [Vertex, Vertex, Vertex] = [
    AxisVertex.ROLL,
    AxisVertex.PITCH,
    AxisVertex.YAW,
  ];
  const lnfc = layerNormalForColour(cubestate, color);
  const pu = primaryUnit(lnfc);

  console.log('lnfc', lnfc)
  console.log('pu', pu)
  const axis = axisVertices[pu[0]];
  const topAngle1 =
    angleBetweenVectors(lnfc, targetVertex) * (pu[1] > 0 ? -1 : 1);

  // For BLUE AT BACK !!! IT SHOULD BE CHOOSING PITCH!!!
  // For YELLOW AT BOTTOM !!! IT SHOULD BE CHOOSING YAW!!!
  // I WANT TO BE ABLE TO BASICALLY SAY!! DO IT FROM A CERTAIN FACE!!
  // I.E LOCK IN A FACE AND ROTATE AROUND IT!!!
  // So if we have locked in LEFT then rotate so that BLUE is at the top
  // If I do not specify this then it should do what it thinks is best??
  // So it needs a way to work this out!

  // IF lockedVertices is NOT specified then lock the front!!! so as to always get the same results
  // regardless of what face needs to be rotated. 
  // If the face that needs to be rotated is NOT the front face then it means it will always choose
  // to roll or Yaw!
  // If the chosen face IS the front face then it can ONLY be pitch!! force it to keep the other
  // This is not neccessarily the case!
  // - Top face
  //  - it does not matter! nothing happens!

  // - Front face could move UP (pitch)
  //  - Sides would stay as they are but Back, Top and Bottom would need to pitch!
  //  - If we lock to TOP it can't be moved obviously
  //  - If we lock to Bottom it can't be moved! as it would need to be a pitch!
  //  - If we lock to Left or Right Pitch can be used!
  //  - If we lock to Back then it can't be moved!

  // - Bottom face would need to do a 180 but this could be achieved with a roll! or a pitch
  //  - If a pitch is chosen then you could NOT lock Back, Front or Top!! only Left and Right!
  //  - If a roll was chosen then you could NOT lock Left, Up or Right! only Back or Front!
  // - Sides will always be a roll! Can't be done with Pitch or Yaw
  //  - Which means locking is redundant!

  // - Back face? Could be achieved with a Pitch !? 
  //  - Roll would simply turn it around <>
  //  - Yaw would move it to either side!

  // The above logic needs to be consolidated to determine which rotation vertex should be used!
  // Maybe you can't lock ?? hmm! but you may need to when wanting to fix a side!
  // How to specify what to lock!?

  // Lock can be implied!?
  // When a double rotation takes place (specific to cube usage of this method)
  // - The first rotation should NOT pass the lock
  // - When a second rotation takes place, all sides have moved so maybe a lock is now possible
  //   based on the new location of the first rotation which would now be at the top!?
  //   Can we assume that there would never be a scenario where the locked face will ever exist?

  // Top > Does not matter!!!
  // Front > Pitch only (90) ! No Lock > Top, Back, Bottom
  // Back > Pitch Only (-90) ! No Lock > Top, Front, Bottom

  // Bottom > Up (180 / -180) | Roll (180 / -180)
  //  Top can't be locked as it will flip!
  //  Back can be locked.. would require a roll
  //  Front can be locked.. would require a roll
  //  Left can be locked.. would require a pitch
  //  Right can be locked.. would require a pitch

  // Left > Roll (90)
  // Right > Roll (-90)

  // OK!!!! Needs to be based on the current Front face!!!! ^^^ thats the problem here
  // By default Orange is left BUT if orange was front the rules would be different
  // Its a perspective thing so, we need to use emergence to determine the constraints!
  // For example. When orange is on the left then it appears like a roll
  // But from the perspective of orange at the front its actually a pitch!
  // So, the lock can't be enforced via a type (or can it?)
  // The method should allow a lock but throw an exception if the lock can not be applied!
  // In most cases the lock can be implied again for example when cube rotates twice
  // the first rotation changes the perspective!

  // !!!! Investigate if valid locking can be implemented via a type!?
  // Perform prechecks!?

  console.log('topAngle1', topAngle1)
  console.log('axis', axis)
  rotateVectorsAtindices(
    cubestate,
    cubestate.map((_v: any, i: number) => i),
    topAngle1,
    axis,
  );
};
