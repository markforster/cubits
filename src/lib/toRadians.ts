/**
 * Converts an angle from degrees to radians.
 * @param angle - The angle value in degrees to be converted to radians.
 * @returns The angle value converted to radians.
 * @remarks This function converts an angle value from degrees to radians using the formula:
 * radians = degrees * (Math.PI / 180).
 * It is commonly used to convert angles from degrees to radians for trigonometric calculations.
 * @example
 * const degrees = FULL_ROTATION;
 * const radians = toRadians(degrees);
 * console.log(radians); // Output: 1.5707963267948966
 *
 * const degrees2 = 45;
 * const radians2 = toRadians(degrees2);
 * console.log(radians2); // Output: 0.7853981633974483
 */
export function toRadians(angle: number): number {
  return (angle % 360.0) * (Math.PI / 180);
}
