import { Vector } from '../cube/lib';
import { countNonZeroElements } from './countNonZeroElements';

/**
 * Checks if the given vector represents an edge in a 2D or 3D space.
 * @param v - The vector to be checked.
 * @returns A boolean value indicating whether the vector represents an edge or not.
 * @remarks This function checks if the given vector represents an edge in a 2D or 3D space.
 * It checks whether the first element of the vector contains exactly two zero values (0, 0)
 * which is a characteristic of an edge in 2D or 3D coordinates.
 * @example
 * const vector1 = [[0, 0, 0], [1, 2, 3]];
 * const result1 = isEdge(vector1);
 * console.log(result1); // Output: false
 *
 * const vector2 = [[1, 0, 0], [0, 2, 0]];
 * const result2 = isEdge(vector2);
 * console.log(result2); // Output: true
 */
export const isEdge = (v: Vector): boolean => {
  // Check if the first element of the vector contains exactly two zeros (0, 0),
  // indicating that it represents an edge in 2D or 3D space.
  return countNonZeroElements(v[0]) === 2;
};
