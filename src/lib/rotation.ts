export const FULL_ROTATION = 90.0;

export const CLOCKWISE = FULL_ROTATION;
export const ANTI_CLOCKWISE = -CLOCKWISE;

/**
 * Rotates a 3D point around an axis by a given angle using the Rodrigues' rotation formula.
 * @param {number[]} point - The 3D point represented as an array [x, y, z].
 * @param {number[]} axis - The 3D axis of rotation represented as an array [u, v, w].
 * @param {number} angle - The angle of rotation in radians.
 * @returns {number[]} The rotated 3D point represented as an array [x', y', z'].
 * @remarks This function applies the 3D rotation using Rodrigues' rotation formula,
 * which rotates the given point around the specified axis by the given angle.
 * The function calculates the rotated coordinates (x', y', z') and returns them as an array.
 * @example
 * const point = [1, 0, 0];
 * const axis = [0, 0, 1];
 * const angle = Math.PI / 2; // 90 degrees
 * const rotatedPoint = rotate3DPoint(point, axis, angle);
 * console.log(rotatedPoint); // Output: [0, 1, 0]
 */
export function rotate3DPoint(point, axis, angle) {
  const [x, y, z] = point;
  const [u, v, w] = axis;
  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  const oneMinusCosAngle = 1 - cosAngle;

  // Apply the 3D rotation matrix (Rodrigues' rotation formula)
  const rotatedX =
    (cosAngle + u ** 2 * oneMinusCosAngle) * x +
    (u * v * oneMinusCosAngle - w * sinAngle) * y +
    (u * w * oneMinusCosAngle + v * sinAngle) * z;

  const rotatedY =
    (v * u * oneMinusCosAngle + w * sinAngle) * x +
    (cosAngle + v ** 2 * oneMinusCosAngle) * y +
    (v * w * oneMinusCosAngle - u * sinAngle) * z;

  const rotatedZ =
    (w * u * oneMinusCosAngle - v * sinAngle) * x +
    (w * v * oneMinusCosAngle + u * sinAngle) * y +
    (cosAngle + w ** 2 * oneMinusCosAngle) * z;

  return [rotatedX, rotatedY, rotatedZ];
}

/**
 * Rotates an array of 3D points around a specified axis by a given angle.
 * @param {number[][]} points - An array of 3D points represented as arrays [x, y, z].
 * @param {number[]} axis - The 3D axis of rotation represented as an array [u, v, w].
 * @param {number} angle - The angle of rotation in radians.
 * @returns {number[][]} An array of rotated 3D points represented as arrays [x', y', z'].
 * @remarks This function applies the 3D rotation to each point in the input array
 * around the specified axis by the given angle.
 * It uses the rotate3DPoint function to perform the individual point rotations.
 * The resulting rotated points are then sanitized using the sanitisePoint function
 * before being returned in a new array.
 * @example
 * const points = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
 * const axis = [0, 0, 1];
 * const angle = Math.PI / 2; // 90 degrees
 * const rotatedPoints = rotate3DPoints(points, axis, angle);
 * console.log(rotatedPoints);
 * // Output: [ [ 0, 1, 0 ], [ -1, 0, 0 ], [ 0, 0, 1 ] ]
 */
export function rotate3DPoints(points, axis, angle) {
  return points.map((point) => {
    return sanitisePoint(rotate3DPoint(point, axis, angle));
  });
}

function sanitisePoint(point: number[]) {
  return point.map((p: number) => Math.round(p));
}
