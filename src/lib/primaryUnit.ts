import { PrimaryUnit } from '.';
import { Vertex } from '../cube/lib';

/**
 * Finds the primary unit of the given Vertex array.
 * @param v - The Vertex array from which to find the primary unit.
 * @returns A PrimaryUnit tuple containing the index and the primary unit value.
 * @remarks This function finds the primary unit of the given Vertex array.
 * The primary unit is the first non-zero value in the array, and its index is also returned.
 * If the array contains all zeros, the function returns [null, 0].
 * @example
 * const vertex1: Vertex = [0, 2, 0];
 * const result1 = primaryUnit(vertex1);
 * console.log(result1); // Output: [1, 2]
 *
 * const vertex2: Vertex = [0, 0, 0];
 * const result2 = primaryUnit(vertex2);
 * console.log(result2); // Output: [null, 0]
 */
export const primaryUnit = (v: Vertex): PrimaryUnit => {
  // Filter out all zero values from the Vertex array.
  const nonZeroValues = v.filter((ccc) => ccc !== 0);

  // Find the index of the first non-zero value in the original Vertex array.
  const index = v.indexOf(nonZeroValues[0]);

  // Return the PrimaryUnit tuple containing the index and the primary unit value.
  return [index !== -1 ? index : null, nonZeroValues[0]];
};
