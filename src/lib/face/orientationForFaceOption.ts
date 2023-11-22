import { FaceOption, faceOrientationKeys, orientationKeys } from '.';
import { ORIENTATIONS } from '../orientations';

export const orientationForFaceOption = (
  faceOption: FaceOption,
): ORIENTATIONS | undefined => {
  if (faceOrientationKeys.includes(faceOption)) {
    return orientationKeys[faceOrientationKeys.indexOf(faceOption)];
  }

  return undefined;
};
