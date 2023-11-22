import { FaceOption } from '.';
import { CubeState } from '../../cube';
import { Face } from '../../cube/Face';
import { IFace } from '../../cube/IFace';

export const faceForFaceOption = (
  cubeState: CubeState,
  option: FaceOption,
): IFace => {
  return new Face(cubeState, option);
};
