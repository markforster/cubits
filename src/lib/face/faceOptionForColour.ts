import { FaceOption, faceColourKeys, colourKeys } from '.';
import { COLOURS } from '../colours';

export const faceOptionForColour = (colour: COLOURS): FaceOption => {
  return faceColourKeys[colourKeys.indexOf(colour)];
};
