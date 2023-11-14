import { FULL_ROTATION } from '../lib/rotation';

/**
 * Type representing a 3D vertex as an array of three numeric values (x, y, z).
 *
 * @public
 */
export type Vertex = [number, number, number];

/**
 * Type representing a 3D vector as an array of two vertices, denoting a direction
 * in 3D space.
 *
 * @public
 */
export type Vector = [Vertex, Vertex];

/**
 * Enum representing the possible directions of rotation for a Rubik's Cube layer.
 *
 * @public
 */
export enum CubeRotationDirection {
  /**
   * No rotation.
   */
  None = 0,

  /**
   * Clockwise rotation.
   */
  ClockWise = 1,

  /**
   * Counterclockwise (anti-clockwise) rotation.
   */
  AntiClockWise = -1,
}

/**
 * Enum representing the rotation angles for a Rubik's Cube layer.
 *
 * @public
 */
export enum RotationAngle {
  /**
   * Clockwise rotation angle, equivalent to a full rotation (360 degrees).
   */
  ClockWise = FULL_ROTATION,

  /**
   * Counterclockwise (anti-clockwise) rotation angle, equivalent to a full rotation
   * in the opposite direction (-360 degrees).
   */
  AntiClockWise = -FULL_ROTATION,
}
