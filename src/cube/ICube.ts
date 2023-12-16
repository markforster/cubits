import { CubeState } from '.';
import { COLOURS } from '../lib/colours';
import { FaceOption } from '../lib/face';
import { IFace } from './IFace';
import { Vertex, CubeRotationDirection, Orientation } from './lib';

/**
 * Represents the state of a Rubiks Cube puzzle.
 *
 * @public
 */
export interface ICubePuzzle {
  /**
   * The current state of the Rubiks Cube.
   */
  state: CubeState;

  /**
   * Checks if the Rubiks Cube is solved, optionally for a specific color.
   *
   * @param colour - Optional. The color to check for. If specified, checks if the specified
   * face has a solid color.
   * @returns `true` if the Rubiks Cube is solved, `false` otherwise.
   */
  solved(colour?: COLOURS): boolean;
  face(option: FaceOption): IFace;
}

/**
 * Represents the mechanics of a Rubiks Cube, including orientation and rotation.
 *
 * @public
 */
export interface ICubeMechanics {
  /**
   * Orients the Rubiks Cube according to a specific algorithm or method.
   * This method is optional and may not be implemented by all cube implementations.
   */
  orientate(
    sourceOrientation: Orientation,
    targetOrientation: Orientation,
    lockedOrientation?: Orientation,
  ): void;

  /**
   * Rotates the Rubiks Cube along a specified axis and direction.
   *
   * @param axis - The axis of rotation (e.g., 'X', 'Y', 'Z').
   * @param direction - The direction of rotation (e.g., 'clockwise', 'counterclockwise').
   */
  rotate(axis: Vertex, direction: CubeRotationDirection): void;

  /**
   * Rotates a layer of the Rubiks Cube for a specified color along a specified direction.
   *
   * @param colour - The color of the layer to rotate.
   * @param direction - The direction of rotation (e.g., 'clockwise', 'counterclockwise').
   */
  rotateLayerForColour(colour: COLOURS, direction: CubeRotationDirection): void;
}

/**
 * Represents a Rubiks Cube, combining puzzle and mechanics interfaces.
 *
 * @public
 */
export interface ICube extends ICubePuzzle, ICubeMechanics {}
