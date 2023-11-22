import { FaceOption } from '..';
import { ORIENTATIONS } from '../../orientations';
import { faceOptionForOrientation } from '../faceOptionForOrientation';

describe('Getting a face option for a orientation', () => {
  it('Should return a TOP face option for the orientation TOP ', () => {
    expect(faceOptionForOrientation(ORIENTATIONS.TOP)).toBe(FaceOption.TOP);
  });

  it('Should return a BOTTOM face option for the orientation BOTTOM ', () => {
    expect(faceOptionForOrientation(ORIENTATIONS.BOTTOM)).toBe(
      FaceOption.BOTTOM,
    );
  });

  it('Should return a LEFT face option for the orientation LEFT ', () => {
    expect(faceOptionForOrientation(ORIENTATIONS.LEFT)).toBe(FaceOption.LEFT);
  });

  it('Should return a RIGHT face option for the orientation RIGHT ', () => {
    expect(faceOptionForOrientation(ORIENTATIONS.RIGHT)).toBe(FaceOption.RIGHT);
  });

  it('Should return a BACK face option for the orientation BACK ', () => {
    expect(faceOptionForOrientation(ORIENTATIONS.BACK)).toBe(FaceOption.BACK);
  });

  it('Should return a FRONT face option for the orientation FRONT ', () => {
    expect(faceOptionForOrientation(ORIENTATIONS.FRONT)).toBe(FaceOption.FRONT);
  });
});
