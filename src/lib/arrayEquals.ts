/**
 * Checks if two arrays are equal by comparing their elements.
 *
 * @param a - The first array to compare.
 * @param b - The second array to compare.
 * @returns `true` if the arrays are equal, `false` otherwise.
 *
 * @remarks
 * This function compares the arrays element-wise. It returns `true` if both arrays
 * have the same length and their corresponding elements are strictly equal.
 *
 * @example
 * ```typescript
 * const result = arrayEquals([1, 2, 3], [1, 2, 3]); // Returns true
 * ```
 *
 * @public
 */
export function arrayEquals(a: any[], b: any[]) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
