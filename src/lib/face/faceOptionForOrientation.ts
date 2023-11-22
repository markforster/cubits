import { FaceOption, faceOrientationKeys, orientationKeys } from '.';
import { ORIENTATIONS } from '../orientations';

export const faceOptionForOrientation = (
  orientation: ORIENTATIONS,
): FaceOption => {
  return faceOrientationKeys[orientationKeys.indexOf(orientation)];
};
