import { PrimaryUnit } from '.';
import { Vertex } from '..';

export const primaryNonUndefinedUnit = (v: Vertex): PrimaryUnit => {
  // Filter out all zero values from the Vertex array.
  const nonZeroValues = v.filter((ccc) => ccc !== undefined);

  // Find the index of the first non-zero value in the original Vertex array.
  const index = v.indexOf(nonZeroValues[0]);

  // Return the PrimaryUnit tuple containing the index and the primary unit value.
  return [index, nonZeroValues[0]];
};
