import { COLOURS } from '../lib/colours';
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
 * Enum representing the possible directions of rotation for a Rubiks Cube layer.
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
 * Enum representing the rotation angles for a Rubiks Cube layer.
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

type ValidOrientation =
  | { left: COLOURS.WHITE; top: COLOURS.BLUE }
  | { left: COLOURS.WHITE; top: COLOURS.RED }
  | { left: COLOURS.WHITE; top: COLOURS.GREEN }
  | { left: COLOURS.WHITE; top: COLOURS.ORANGE }
  | { left: COLOURS.BLUE; top: COLOURS.WHITE }
  | { left: COLOURS.BLUE; top: COLOURS.RED }
  | { left: COLOURS.BLUE; top: COLOURS.YELLOW }
  | { left: COLOURS.BLUE; top: COLOURS.ORANGE }
  | { left: COLOURS.GREEN; top: COLOURS.WHITE }
  | { left: COLOURS.GREEN; top: COLOURS.RED }
  | { left: COLOURS.GREEN; top: COLOURS.YELLOW }
  | { left: COLOURS.GREEN; top: COLOURS.ORANGE }
  | { left: COLOURS.RED; top: COLOURS.WHITE }
  | { left: COLOURS.RED; top: COLOURS.GREEN }
  | { left: COLOURS.RED; top: COLOURS.BLUE }
  | { left: COLOURS.RED; top: COLOURS.YELLOW }
  | { left: COLOURS.YELLOW; top: COLOURS.GREEN }
  | { left: COLOURS.YELLOW; top: COLOURS.BLUE }
  | { left: COLOURS.YELLOW; top: COLOURS.RED }
  | { left: COLOURS.YELLOW; top: COLOURS.ORANGE }
  | { left: COLOURS.ORANGE; top: COLOURS.WHITE }
  | { left: COLOURS.ORANGE; top: COLOURS.GREEN }
  | { left: COLOURS.ORANGE; top: COLOURS.BLUE }
  | { left: COLOURS.ORANGE; top: COLOURS.YELLOW };

export type Orientation = ValidOrientation;
