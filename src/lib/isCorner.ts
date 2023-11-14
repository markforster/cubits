import { Vector } from '../cube/lib';
import { countNonZeroElements } from './countNonZeroElements';

/**
 * Checks if the given vector represents a corner in a 3D space.
 * @param v - The vector to be checked.
 * @returns A boolean value indicating whether the vector represents a corner or not.
 * @remarks This function checks if the given vector represents a corner in a 3D space.
 * It checks whether the first element of the vector contains three zero values (0, 0, 0),
 * which is a characteristic of a corner in 3D coordinates.
 * @example
 * const vector1 = [[0, 0, 0], [1, 2, 3], [4, 5, 6]];
 * const result1 = isCorner(vector1);
 * console.log(result1); // Output: true
 *
 * const vector2 = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
 * const result2 = isCorner(vector2);
 * console.log(result2); // Output: false
 */
export const isCorner = (v: Vector): boolean => {
  // Check if the first element of the vector contains three zeros (0, 0, 0),
  // indicating that it represents a corner in 3D space.
  return countNonZeroElements(v[0]) === 3;
};
