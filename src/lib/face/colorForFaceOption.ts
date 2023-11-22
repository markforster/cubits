import { FaceOption, faceColourKeys, colourKeys } from '.';
import { COLOURS } from '../colours';

export const colorForFaceOption = (
  faceOption: FaceOption,
): COLOURS | undefined => {
  if (faceColourKeys.includes(faceOption)) {
    return colourKeys[faceColourKeys.indexOf(faceOption)];
  }

  return undefined;
};
