import { Vertex } from '../cube/lib';

/**
 * Counts the number of non-zero elements in the given array of numbers.
 * @param vertex - The array of numbers (Vertex) in which to count non-zero elements.
 * @returns The count of non-zero elements in the array.
 * @remarks This function counts the number of non-zero elements in the provided array.
 * It uses the Array.filter() method to create a new array containing only non-zero elements,
 * and then returns the length of that filtered array, which represents the count of non-zero elements.
 * @example
 * const arr1 = [1, 0, 2, 0, 3, 0];
 * const count1 = countNonZeroElements(arr1);
 * console.log(count1); // Output: 3
 *
 * const arr2 = [0, 0, 0, 0, 0];
 * const count2 = countNonZeroElements(arr2);
 * console.log(count2); // Output: 0
 */
export const countNonZeroElements = (vertex: Vertex): number => {
  // Improving the code: Add input validation to handle non-array inputs.
  if (!Array.isArray(vertex)) {
    throw new Error('Invalid input. The input must be an array of numbers.');
  }

  // Use Array.filter() to create a new array with only non-zero elements,
  // and return the length of the filtered array.
  return vertex.filter((unit: number) => unit !== 0).length;
};
