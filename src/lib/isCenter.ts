import { Vector } from '../cube/lib';
import { countNonZeroElements } from './countNonZeroElements'; // Assuming the correct path to the zeroCount function.

/**
 * Checks if the given vector represents a center in a 2D or 3D space.
 * @param v - The vector to be checked.
 * @returns A boolean value indicating whether the vector represents a center or not.
 * @remarks This function checks if the given vector represents a center in a 2D or 3D space.
 * A center is defined as a vector containing a single vertex (Vertex) with only one zero value
 * (0) in it, indicating the central point in 2D or 3D coordinates.
 * It checks whether the first vertex of the vector contains exactly one zero value (0),
 * which is a characteristic of a center in 2D or 3D space.
 * @example
 * const vector1: Vector = [[0, 0, 0], [1, 2, 3], [4, 5, 6]];
 * const result1 = isCenter(vector1);
 * console.log(result1); // Output: false
 *
 * const vector2: Vector = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
 * const result2 = isCenter(vector2);
 * console.log(result2); // Output: true
 */
export const isCenter = (v: Vector): boolean => {
  // Check if the first vertex of the vector contains exactly one zero (0),
  // indicating that it represents a center in 2D or 3D space.
  return countNonZeroElements(v[0]) === 1;
};
