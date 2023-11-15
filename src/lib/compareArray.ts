/**
 * Compares two arrays to check if they have the same values in the same order.
 * @param arr1 - The first array of numbers to compare.
 * @param arr2 - The second array of numbers to compare.
 * @returns A boolean value indicating whether the arrays are equal or not.
 * @remarks This function checks if the two arrays have the same values in the same order.
 * It returns true if both arrays are equal, otherwise, it returns false.
 * The arrays must have the same length for the comparison to be valid.
 * @example
 * const arr1 = [1, 2, 3];
 * const arr2 = [1, 2, 3];
 * const result = compareArray(arr1, arr2);
 * console.log(result); // Output: true
 *
 * const arr3 = [1, 2, 3];
 * const arr4 = [1, 3, 2];
 * const result2 = compareArray(arr3, arr4);
 * console.log(result2); // Output: false
 */
export const compareArray = (arr1: number[], arr2: number[]): boolean => {
  // Check if both arrays have the same length
  if (arr1.length !== arr2.length) {
    throw new Error(`Arrays are of different lengths`);
  }

  // Use the every() function to compare each element in the arrays.
  // The every() function will stop iterating as soon as a mismatch is found.
  return arr1.every((value: number, index: number) => value === arr2[index]);
};
