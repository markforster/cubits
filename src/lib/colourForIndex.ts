/**
 * Calculates a color value based on the index.
 * @param index - The index value for which to calculate the color.
 * @returns The color value represented as a whole number.
 * @remarks This function calculates a color value based on the given index.
 * It divides the index by 9 and rounds down to the nearest whole number using Math.floor().
 * The calculated color value can be used for various purposes, such as coloring elements in a grid or list.
 * @example
 * const color1 = colourForIndex(25);
 * console.log(color1); // Output: 2
 *
 * const color2 = colourForIndex(12);
 * console.log(color2); // Output: 1
 */

import { COLOURS } from './colours';

export function colourForIndex(index: number): COLOURS {
  // Improving the code: Add input validation to handle non-numeric and negative index values.
  if (typeof index !== 'number' || isNaN(index) || index < 0) {
    throw new Error(
      'Invalid input. The index must be a non-negative numeric value.',
    );
  }

  // Calculate the color value by dividing the index by 9 and rounding down.
  return Math.floor(index / 9.0) as COLOURS;
}
