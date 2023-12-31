import { Vertex } from '..';
import { LayersVertex, compareArray } from '.';
import { binaryToArray } from './binaryToArray';
import { maskVerticesToBitArray } from './maskVerticesToBitArray';
import { normaliseVertex } from './normaliseVertex';

export const determinRotationAxis = (
  sourceAxis: Vertex,
  targetAxis: Vertex,
  lockedAxis?: Vertex,
): Vertex => {
  const preferredAxisLock: Vertex = normaliseVertex(
    lockedAxis || LayersVertex.FRONT,
  );

  const preferredTopAxis: Vertex = normaliseVertex(
    lockedAxis || LayersVertex.TOP,
  );

  const v1: Vertex = normaliseVertex(sourceAxis);
  const v2: Vertex = normaliseVertex(targetAxis);
  const v3: Vertex = normaliseVertex(preferredAxisLock);

  const mask1: number = maskVerticesToBitArray(v1);
  const mask2: number = maskVerticesToBitArray(v2);
  const mask3: number = maskVerticesToBitArray(v3);

  if (((mask1 | mask2) ^ 0b111) !== mask3) {
    if (mask1 === mask2) {
      if (compareArray(v1, preferredAxisLock)) return preferredTopAxis;
      return binaryToArray(mask3) as Vertex;
    } else if (lockedAxis !== undefined) {
      throw new Error(
        `Not possible to rotate ${sourceAxis} to ${targetAxis} while locking ${lockedAxis}`,
      );
    } else {
      const rem = (mask1 | mask2) ^ 0b111;

      return binaryToArray(rem) as Vertex;
    }
  }
  return preferredAxisLock;
};
