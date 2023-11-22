import { COLOURS } from '../colours';
import { ORIENTATIONS } from '../orientations';

export enum FaceOption {
  TOP,
  BOTTOM,
  FRONT,
  BACK,
  LEFT,
  RIGHT,
  WHITE,
  YELLOW,
  GREEN,
  BLUE,
  ORANGE,
  RED,
}

export const faceColourKeys: FaceOption[] = [
  FaceOption.WHITE,
  FaceOption.YELLOW,
  FaceOption.BLUE,
  FaceOption.GREEN,
  FaceOption.ORANGE,
  FaceOption.RED,
];

export const faceOrientationKeys: FaceOption[] = [
  FaceOption.TOP,
  FaceOption.BOTTOM,
  FaceOption.FRONT,
  FaceOption.BACK,
  FaceOption.LEFT,
  FaceOption.RIGHT,
];

export const colourKeys: COLOURS[] = [
  COLOURS.WHITE,
  COLOURS.YELLOW,
  COLOURS.BLUE,
  COLOURS.GREEN,
  COLOURS.ORANGE,
  COLOURS.RED,
];

export const orientationKeys: ORIENTATIONS[] = [
  ORIENTATIONS.TOP,
  ORIENTATIONS.BOTTOM,
  ORIENTATIONS.FRONT,
  ORIENTATIONS.BACK,
  ORIENTATIONS.LEFT,
  ORIENTATIONS.RIGHT,
];
