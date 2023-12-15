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
  /*
    !!! new idea
    - instead of having a method to orientate to left / top / right etc..
      have a single method that just proxied the request to 'rotateCubeState'

      then assume the action of rotating the cube is performed by a controller who will
      coordinate the 2 actions need to orientate a cube

      ! Need to think about ?? the language used to describe RC actions and how to 
      extend it to incorporate orientation

      for example:
        FL - move Front to Left
        FLTF - move front to left then top to front.. since L was part of front left, use L as a locked axis!!
   */

  // orientate(orientation: Orientation): void;
  // orientate(sourceAxis: Vertex, targetAxis: Vertex, lockedAxis: Vertex): void;
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
